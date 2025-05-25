import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto, CategoryForm } from '../dto';
import {
  ApiBody,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';
import { ApiResponse as CustomApiResponse } from '../dto/response.dto';

@ApiTags('Categories APi')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  // GET /categories?query=searchTerm
  @Get('all')
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({
    status: 200,
    description: 'List of categories',
    schema: {
      allOf: [
        { $ref: getSchemaPath(CustomApiResponse) }, // Tham chiếu đến ApiResponse
        {
          properties: {
            data: {
              type: 'array',
              items: { $ref: getSchemaPath(CategoryDto) }, // Tham chiếu đến CategoryDto
            },
          },
        },
      ],
    },
  })
  @ApiQuery({ name: 'query', required: false, description: 'Search query' })
  async getCategory(
    @Query('query') query: string = '',
  ): Promise<CustomApiResponse<CategoryDto[]>> {
    const categories = await this.categoryService.getCategory(query);
    if (!categories || categories.length === 0) {
      return new CustomApiResponse<CategoryDto[]>(
        HttpStatus.OK,
        'No categories found',
        [],
      );
    }
    return new CustomApiResponse<CategoryDto[]>(
      HttpStatus.OK,
      'No categories found',
      categories.map(({ id, name, createDate }) => ({
        id,
        name,
        createDate,
      })),
    );
  }

  // GET /categories/:id
  @Get(':id')
  @ApiOperation({ summary: 'Get by id' })
  @ApiResponse({
    status: 200,
    description: 'List of categories',
    schema: {
      allOf: [
        { $ref: getSchemaPath(CustomApiResponse) }, // Tham chiếu đến ApiResponse
        {
          properties: {
            data: {
              type: 'object',
              items: { $ref: getSchemaPath(CategoryDto) }, // Tham chiếu đến CategoryDto
            },
          },
        },
      ],
    },
  })
  async getCategoryById(
    @Param('id') id: number,
  ): Promise<CustomApiResponse<CategoryDto>> {
    const category = await this.categoryService.getCategoryById(id);
    let categoryDto: CategoryDto = {
      id: 0,
      name: '',
      createDate: new Date(),
    };
    if (!category) {
      return new CustomApiResponse<CategoryDto>(
        HttpStatus.NOT_FOUND,
        'No categories found',
        categoryDto,
        false,
        404,
      );
    }
    categoryDto = {
      id: category.id,
      name: category.name,
      createDate: category.createDate,
    };
    return new CustomApiResponse<CategoryDto>(HttpStatus.OK, '', categoryDto);
  }

  // Post /categories/
  @Post()
  @ApiOperation({ summary: 'Create category' })
  @ApiResponse({
    status: 200,
    description: 'List of categories',
    schema: {
      allOf: [
        { $ref: getSchemaPath(CustomApiResponse) }, // Tham chiếu đến ApiResponse
        {
          properties: {
            data: {
              type: 'number',
              items: { $ref: getSchemaPath(Number) }, // Tham chiếu đến CategoryDto
            },
          },
        },
      ],
    },
  })
  @ApiBody({
    description: 'Category data to create',
    type: CategoryForm,
  })
  async createCategory(
    @Body() category: CategoryForm,
  ): Promise<CustomApiResponse<number>> {
    const categoryRes = await this.categoryService.createCategory(category);
    if (!categoryRes || !categoryRes.id) {
      return new CustomApiResponse<number>(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'Error creating category',
        0,
        false,
        500,
      );
    }
    return new CustomApiResponse<number>(HttpStatus.OK, '', categoryRes.id);
  }

  // PUT /category/:id
  @Put(':id')
  @ApiOperation({ summary: 'Update category' })
  @ApiResponse({
    status: 200,
    description: 'List of categories',
    schema: {
      allOf: [
        { $ref: getSchemaPath(CustomApiResponse) }, // Tham chiếu đến ApiResponse
        {
          properties: {
            data: {
              type: 'number',
              items: { $ref: getSchemaPath(Number) }, // Tham chiếu đến CategoryDto
            },
          },
        },
      ],
    },
  })
  @ApiBody({
    description: 'Category data to update',
    type: CategoryForm,
  })
  async updateCategory(
    @Param('id') id: number,
    @Body() category: CategoryForm,
  ): Promise<CustomApiResponse<number>> {
    try {
      let categoryRes = await this.categoryService.getCategoryById(id);
      if (!categoryRes) {
        return new CustomApiResponse<number>(
          HttpStatus.NOT_FOUND,
          'Category not found',
          0,
          false,
          404,
        );
      }
      categoryRes = await this.categoryService.updateCategory(category, id);
      return new CustomApiResponse<number>(
        HttpStatus.OK,
        'Category updated successfully',
        categoryRes.id,
      );
    } catch (error) {
      return new CustomApiResponse<number>(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'Error updating category',
        0,
        false,
        500,
      );
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete category' })
  @ApiResponse({
    status: 200,
    description: 'Delete category',
    schema: {
      allOf: [
        { $ref: getSchemaPath(CustomApiResponse) }, // Tham chiếu đến ApiResponse
        {
          properties: {
            data: {
              type: 'number',
              items: { $ref: getSchemaPath(Number) }, // Tham chiếu đến CategoryDto
            },
          },
        },
      ],
    },
  })
  async deleteCategory(
    @Param('id') id: number,
  ): Promise<CustomApiResponse<number>> {
    try {
      const category = await this.categoryService.deleteCategory(id);
      if (!category) {
        return new CustomApiResponse<number>(
          HttpStatus.NOT_FOUND,
          'Category not found',
          0,
          false,
          404,
        );
      }
      return new CustomApiResponse<number>(
        HttpStatus.OK,
        'Category deleted successfully',
        category.id,
      );
    } catch (error) {
      return new CustomApiResponse<number>(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'Error deleting category',
        0,
        false,
        500,
      );
    }
  }
}
