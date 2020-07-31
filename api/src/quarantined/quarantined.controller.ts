import { Controller, Put, HttpCode, Body, Param, Get } from '@nestjs/common';
import { QuarantinedService } from './quarantined.service';
import { UntypedObject } from 'src/core/types/UntypedObject';
import { IMobileUserModel } from 'src/register/model/IMobileUserModel';

@Controller('quarantined')
export class QuarantinedController {
  constructor(private readonly quarantinedService: QuarantinedService) {}
  
  @Put(':mobileUserId')
  @HttpCode(200)
  public async quarantined(@Param('mobileUserId') mobileUserId: string, @Body() user: IMobileUserModel) {
    return await this.quarantinedService.quarantined(mobileUserId, user);
  }

  @Get(':mobileUserId')
  @HttpCode(200)
  public async check(@Param('mobileUserId') mobileUserId: string) {
    return await this.quarantinedService.checkStatusByUserId(mobileUserId);
  }
}
