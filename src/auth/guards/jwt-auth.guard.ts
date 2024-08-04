import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { ALLOWEDACTION, MODULE_NAME } from 'src/utils';
import { PERMISSION } from '../decorators/allowed-actions.decorator';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    const { module: moduleName, allowed_action: requiredActions } =
      this.reflector.getAllAndOverride<{
        module: MODULE_NAME;
        allowed_action: ALLOWEDACTION[];
      }>(PERMISSION, [context.getHandler(), context.getClass()]);

    const isPublic = moduleName === MODULE_NAME.GUEST ? true : false;

    if (request.headers.authorization === undefined && isPublic) {
      return true;
    }

    return super.canActivate(context);
  }

  handleRequest<TUser = any>(err: any, user: any): TUser {
    if (err || !user) {
      throw (
        err ||
        new UnauthorizedException({
          is_success: false,
          message: 'Access Token expired',
        })
      );
    }

    return user;
  }
}
