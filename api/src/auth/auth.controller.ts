import { Controller, Post, HttpCode, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { IUserModel } from 'src/user/model/IUserModel';
import { AuthResponseTransformer } from 'src/core/transformer/response/AuthResponseTransformer';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @HttpCode(200)
  public async signIn(@Body() user) {
    const currentUser: IUserModel = await this.authService.signIn(user);

    const jwtToken: string = this.authService.buildJwtToken(currentUser);

    return AuthResponseTransformer.fromSign(currentUser, jwtToken);
  }

  @Post('signup')
  @HttpCode(201)
  public async signUp(@Body() user) {
    const userCreated: IUserModel = await this.authService.signUp(user);

    const jwtToken: string = this.authService.buildJwtToken(userCreated);

    return AuthResponseTransformer.fromSign(userCreated, jwtToken);
  }
}
