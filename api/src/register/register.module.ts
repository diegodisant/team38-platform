import { Module } from '@nestjs/common';
import { RegisterValidator } from './register.validator';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';

@Module({
  providers: [RegisterValidator, RegisterService],
  controllers: [RegisterController],
})
export class RegisterModule {}
