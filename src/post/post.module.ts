import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post, PostType, User } from 'src/entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post, PostType, User]), // Đăng ký UserRepository
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
