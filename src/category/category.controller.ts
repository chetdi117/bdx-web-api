import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from '../entity';
import { CategoryForm } from '../dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  // GET /categories?query=searchTerm
  @Get()
  async getCategory(@Query('query') query: string = ''): Promise<Category[]> {
    return this.categoryService.getCategory(query);
  }

  // GET /categories/:id
  @Get(':id')
  async getCategoryById(@Param('id') id: number): Promise<Category | null> {
    return this.categoryService.getCategoryById(id);
  }

  // Post /categories/:id
  @Post()
  async createCategory(
    @Param('id') id: number,
    @Body() category: CategoryForm,
  ): Promise<Category> {
    return this.categoryService.createCategory(category);
  }

  // PUT /categories/:id
  @Put(':id')
  async updateCategory(
    @Param('id') id: number,
    @Body() category: CategoryForm,
  ): Promise<Category> {
    return this.categoryService.updateCategory(category, id);
  }
}
