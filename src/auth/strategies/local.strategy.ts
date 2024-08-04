import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UserService } from '../../user/user.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private userService: UserService,
  ) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(email: string, password: string) {
    const user = await this.userService.validateUser(email, password);

    if (!user) {
      throw new UnauthorizedException({
        is_success: false,
        message: 'Kindly enter correct credentials',
      });
    }

    await this.userService.updateLastLogin(user.id);

    return user;
  }
}
