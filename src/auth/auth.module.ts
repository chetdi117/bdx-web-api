import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category, Post, User } from 'src/entity';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
@Module({
  imports: [
    PassportModule,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const secret = await configService.get<string>('JWT_SECRET_KEY');
        return {
          secret,
          signOptions: {
            expiresIn: '1d', // Token expiration time
          },
        };
      },
    }),
    UserModule,
    TypeOrmModule.forFeature([Category, Post, User]), // Đăng ký UserRepository
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
