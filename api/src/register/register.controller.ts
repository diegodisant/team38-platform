import { Controller, HttpCode, Body, Post } from '@nestjs/common';
import { RegisterService } from './register.service';
import { IMobileUserModel } from './model/IMobileUserModel';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  @HttpCode(201)
  public async register(@Body() mobileUser) {
    const currentUser: IMobileUserModel = await this.registerService.register(mobileUser);

    return currentUser;
  }
}
