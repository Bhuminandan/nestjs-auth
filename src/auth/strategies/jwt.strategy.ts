import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from '../../user/user.service';

declare module 'express' {
  interface Request {
    user: {
      username: string;
      user_id: number;
      role_id: number;
      role_name: string;
    };
  }
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET'),
    });
  }

  async validate(payload: { username: string; sub: number }) {
    const user = await this.userService.findOneUser({
      relations: {
        role: true,
      },
      where: {
        id: payload.sub,
      },
    });

    if (!user) {
      throw new UnauthorizedException({
        is_success: false,
        message: 'Access Denied',
      });
    }

    return {
      username: user.username,
      userId: user.id,
      role_id: user.role?.id,
      role_name: user.role?.name,
    };
  }
}
