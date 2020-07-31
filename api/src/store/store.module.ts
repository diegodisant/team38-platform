import { Module } from '@nestjs/common';
import { StoreController } from './store.controller';
import { StoreValidator } from './store.validator';
import { StoreService } from './store.service';


@Module({
  providers: [StoreValidator, StoreService],
  controllers: [StoreController],
})
export class StoreModule {}
