import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { Category, Post, User } from 'src/entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category, Post, User]), // Đăng ký UserRepository
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
