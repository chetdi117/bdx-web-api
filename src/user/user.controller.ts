import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { User } from '../entity';
import { UserService } from './user.service';
import { LoginUserFrm, RegisterUserFrm, UserDto } from '../dto';
import {
  ApiBody,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  getSchemaPath,
} from '@nestjs/swagger';
import { BaseAPiResponse } from '../dto/response.dto';
import { HashString } from 'src/helpers';
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('all')
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({
    status: 200,
    description: 'List of categories',
    schema: {
      allOf: [
        { $ref: getSchemaPath(BaseAPiResponse) }, // Tham chiếu đến ApiResponse
        {
          properties: {
            data: {
              type: 'array',
              items: { $ref: getSchemaPath(UserDto) }, // Tham chiếu đến CategoryDto
            },
          },
        },
      ],
    },
  })
  @ApiQuery({ name: 'query', required: false, description: 'Search query' })
  async getUsers(@Query('query') query: string): Promise<UserDto[]> {
    const users = await this.userService.getAllUsers(query);
    if (!users || users.length === 0) {
      return [];
    }

    return users.map(
      (user) =>
        ({
          id: user.id,
          email: user.email,
          fullName: user.fullName,
          phone: user.phone,
          address: user.address,
          district: user.district,
          ward: user.ward,
          city: user.city,
          createDate: user.createDate,
          updateDate: user.updateDate,
        }) as UserDto,
    );
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by id' })
  @ApiResponse({
    status: 200,
    description: 'Get Users',
    schema: {
      allOf: [
        { $ref: getSchemaPath(BaseAPiResponse) },
        {
          properties: {
            data: {
              type: 'object ',
              items: { $ref: getSchemaPath(UserDto) },
            },
          },
        },
      ],
    },
  })
  async getUserById(@Query('id') id: number): Promise<UserDto> {
    const user = await this.userService.getUserById(id);

    if (!user) {
      throw new Error('User not found');
    }
    const res = new UserDto();

    res.id = user.id;
    res.email = user.email;
    res.fullName = user.fullName;
    res.phone = user.phone;
    res.address = user.address;
    res.district = user.district;
    res.ward = user.ward;
    res.city = user.city;
    res.createDate = user.createDate;
    res.updateDate = user.updateDate;
    return res;
  }

  @Post('login-user')
  @ApiOperation({ summary: 'login user' })
  @ApiResponse({
    status: 200,
    description: 'login user',
    schema: {
      allOf: [
        { $ref: getSchemaPath(BaseAPiResponse) },
        {
          properties: {
            data: {
              type: 'object ',
              items: { $ref: getSchemaPath(UserDto) },
            },
          },
        },
      ],
    },
  })
  async loginUser(@Body() loginUserFrm: LoginUserFrm): Promise<UserDto> {
    const { email, password } = loginUserFrm;
    if (!email || !password) {
      throw new Error('Email and password are required');
    }
    const user = await this.userService.loginUser(loginUserFrm);

    if (!user) {
      throw new Error('User not found');
    }

    const res = new UserDto();

    res.id = user.id;
    res.email = user.email;
    res.fullName = user.fullName;
    res.phone = user.phone;
    res.address = user.address;
    res.district = user.district;
    res.ward = user.ward;
    res.city = user.city;
    res.createDate = user.createDate;
    res.updateDate = user.updateDate;
    return res;
  }

  @Post('register-user')
  @ApiResponse({
    status: 200,
    description: 'register user',
    schema: {
      allOf: [
        { $ref: getSchemaPath(BaseAPiResponse) },
        {
          properties: {
            data: {
              type: 'object ',
              items: { $ref: getSchemaPath(UserDto) },
            },
          },
        },
      ],
    },
  })
  async registerUser(@Body() userFrm: RegisterUserFrm): Promise<UserDto> {
    const user = await this.userService.registerUser(userFrm);

    if (!user) {
      throw new Error('User not found');
    }
    const res = new UserDto();

    res.id = user.id;
    res.email = user.email;
    res.fullName = user.fullName;
    res.phone = user.phone;
    res.address = user.address;
    res.district = user.district;
    res.ward = user.ward;
    res.city = user.city;
    res.createDate = user.createDate;
    res.updateDate = user.updateDate;
    return res;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update User' })
  @ApiResponse({
    status: 200,
    description: 'update user',
    schema: {
      allOf: [
        { $ref: getSchemaPath(BaseAPiResponse) },
        {
          properties: {
            data: {
              type: 'object ',
              items: { $ref: getSchemaPath(UserDto) },
            },
          },
        },
      ],
    },
  })
  @ApiBody({
    description: 'Update user data',
    type: RegisterUserFrm,
  })
  async updateUser(
    @Param('id') id: number,
    @Body() userFrm: Partial<RegisterUserFrm>,
  ): Promise<number> {
    try {
      const user = await this.userService.updateUser(id, userFrm);

      if (!user) {
        throw new Error('User not found');
      }
      return user.id;
    } catch (error) {
      throw new Error(`Error updating use`);
    }
  }
}
