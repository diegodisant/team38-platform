import { Controller, Body, HttpCode, Post, Get } from '@nestjs/common';
import { IBluetoothModel } from './model/IBluetoothModel';
import { BluetoothService } from './bluetooth.service';

@Controller('bluetooth')
export class BluetoothController {
  constructor(private readonly service: BluetoothService) {}

  @Post()
  @HttpCode(201)
  public async create(@Body() bluetoothData: IBluetoothModel) {
    return await this.service.create(bluetoothData);
  }

  @Get()
  @HttpCode(200)
  public async all() {
    return await this.service.all();
  }
}
