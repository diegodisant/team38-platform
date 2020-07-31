import { Module } from '@nestjs/common';
import { StoreAccessService } from './store-access.service';
import { StoreAccessController } from './store-access.controller';

@Module({
  providers: [StoreAccessService],
  controllers: [StoreAccessController],
})
export class StoreAccessModule {}
