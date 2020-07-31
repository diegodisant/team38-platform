import { Controller, Post, HttpCode, Body, Get } from '@nestjs/common';
import { IStoreModel } from './model/IStoreModel';
import { StoreService } from './store.service';

@Controller('store')
export class StoreController {
  constructor(private readonly service: StoreService) {}

  @Post()
  @HttpCode(201)
  public async create(@Body() store: IStoreModel) {
    return await this.service.create(store);
  }

  @Get()
  @HttpCode(200)
  public async all() {
    return await this.service.all();
  }
}
