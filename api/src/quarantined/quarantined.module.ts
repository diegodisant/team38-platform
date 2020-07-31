import { Module } from '@nestjs/common';
import { QuarantinedService } from './quarantined.service';
import { QuarantinedValidator } from './quarantined.validator';
import { QuarantinedController } from './quarantined.controller';

@Module({
  providers: [QuarantinedValidator, QuarantinedService],
  controllers: [QuarantinedController],
})
export class QuarantinedModule {}
