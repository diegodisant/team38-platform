import { Module } from '@nestjs/common';
import { GenerateDataController } from './generate-data.controller';
import { GenerateDataService } from './generate-data.service';
import { RandomMobileUserFactory } from './factory/RandomMobileUserFactory';
import { RandomBluetoothInteractionFactory } from './factory/RandomBluetoothInterationFactory';
import { RandomStoreFactory } from './factory/RandomStoreFactory';
import { StoreAccessService } from 'src/store-access/store-access.service';

@Module({
  controllers: [GenerateDataController],
  providers: [
    StoreAccessService,
    RandomMobileUserFactory,
    RandomBluetoothInteractionFactory,
    RandomStoreFactory,
    GenerateDataService,
  ],
})
export class GenerateDataModule {}
