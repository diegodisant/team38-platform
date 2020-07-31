import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthStrategy } from './auth.strategy';
import { AuthController } from './auth.controller';
import { AuthValidator } from './auth.validator';

@Module({
  imports: [],
  providers: [AuthValidator, AuthService, AuthStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
