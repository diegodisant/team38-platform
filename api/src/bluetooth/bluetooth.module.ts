import { Module } from '@nestjs/common';
import { BluetoothController } from './bluetooth.controller';
import { BluetoothValidator } from './bluetooth.validator';
import { BluetoothService } from './bluetooth.service';

@Module({
  controllers: [BluetoothController],
  providers: [BluetoothValidator, BluetoothService],
})
export class BluetoothModule {}
