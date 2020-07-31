import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { StoreAccessService } from './store-access.service';

@Controller('store-access')
export class StoreAccessController {
  constructor(private readonly service: StoreAccessService) {}
  
  @Get('/:mobileUserId/:qrText')
  @HttpCode(200)
  public async access(@Param('mobileUserId') mobileUserId: string, @Param('qrText') qrText: string) {
    return this.service.access(mobileUserId, qrText);
  }

  @Get()
  @HttpCode(200)
  public async all() {
    return await this.service.all();
  }
}
