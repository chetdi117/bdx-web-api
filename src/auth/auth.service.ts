import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginUserFrm } from 'src/dto';
import { User } from 'src/entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: LoginUserFrm): Promise<string> {
    const validatedUser = await this.userService.loginUser(user);
    if (!validatedUser) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload = { email: validatedUser.email, sub: validatedUser.id };
    return this.jwtService.sign(payload); // Tạo JWT token
  }
}
