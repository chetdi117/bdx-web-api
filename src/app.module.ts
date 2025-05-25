import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5532,
      username: 'postgres',
      password: '',
      database: 'bdsdb',
      autoLoadEntities: true, // Automatically load entities
      synchronize: false, // Automatically sync database schema (disable in production)
    }),
    // TypeOrmModule.forFeature([
    //   User,
    //   Post,
    //   Category,
    //   PostType,
    //   Role,
    //   Permission,
    //   RolePermission,
    // ]),
    UserModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
