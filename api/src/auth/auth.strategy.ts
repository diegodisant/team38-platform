import { Injectable, Req, HttpException, HttpStatus, ForbiddenException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthService } from './auth.service';
import config from 'src/core/config/env/EnvConfiguration';
import { Request } from 'express';

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      passReqToCallback: true,
      secretOrKey: config.secret,
    });
  }

  // tslint:disable-next-line: ban-types
  public async validate(@Req() req: Request, payload, done: Function) {
    const isUserValid: boolean = await this.authService.validateUser(payload);

    if (isUserValid) {
      return done(null, payload);
    } else {
      throw new ForbiddenException('Unauthorized access, you shall not pass');
    }
  }
}
