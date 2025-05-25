import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Category, Permission, Post, PostType, Role, User } from 'src/entity';
import { HashString } from 'src/helpers';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Category,
      Post,
      PostType,
      Role,
      Permission,
    ]), // Đăng ký UserRepository
  ],
  controllers: [UserController],
  providers: [UserService, HashString],
})
export class UserModule {}
