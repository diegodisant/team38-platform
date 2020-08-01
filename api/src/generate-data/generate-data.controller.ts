import { Controller, HttpCode, Param, Get } from '@nestjs/common';
import { GenerateDataService } from './generate-data.service';

@Controller('generate-data')
export class GenerateDataController {
  constructor(private readonly service: GenerateDataService) {}

  @Get('/:days/:stores/:maxPeople/:maxInteractions')
  @HttpCode(201)
  public async generate(
    @Param('days') days: number,
    @Param('stores') stores: number,
    @Param('maxPeople') maxPeople: number,
    @Param('maxInteractions') maxInteractions: number
  ) {
    return await this.service.generate(
      days,
      stores,
      maxPeople,
      maxInteractions
    );
  }
}
