import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Lấy JWT từ header Authorization
      ignoreExpiration: false, // Không bỏ qua token hết hạn
      secretOrKey:
        configService.get<string>('JWT_SECRET_KEY') || 'defaultSecretKey', // Lấy secret từ .env hoặc giá trị mặc định
    });
  }

  validate(payload: any) {
    // Trả về thông tin user từ payload
    return { userId: payload.sub, email: payload.email };
  }
}
