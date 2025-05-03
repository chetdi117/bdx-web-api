import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { User } from '../entity';
import { UserService } from './user.service';
import { LoginUserFrm, RegisterUserFrm } from '../dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('users')
  async getUsers(@Query('query') query: string): Promise<User[]> {
    return this.userService.getAllUsers(query);
  }

  @Get('user:id')
  async getUserById(@Query('id') id: number): Promise<User | null> {
    return this.userService.getUserById(id);
  }

  @Post('login-user')
  async loginUser(@Body() loginUserFrm: LoginUserFrm): Promise<User> {
    return this.userService.loginUser(loginUserFrm);
  }

  @Post('register-user')
  async registerUser(@Body() userFrm: RegisterUserFrm): Promise<User> {
    return this.userService.registerUser(userFrm);
  }
}
