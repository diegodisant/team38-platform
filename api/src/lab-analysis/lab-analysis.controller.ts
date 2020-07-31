import { Controller, Post, HttpCode, Body, Get } from '@nestjs/common';
import { ILabAnalysisModel } from './model/ILabAnalysisModel';
import { LabAnalysisService } from './lab-analysis.service';

@Controller('lab-analysis')
export class LabAnalysisController {
  constructor(private readonly service: LabAnalysisService) {}
  
  @Post()
  @HttpCode(201)
  public async create(@Body() analysis: ILabAnalysisModel) {
    return await this.service.create(analysis);
  }

  @Get()
  @HttpCode(200)
  public async all() {
    return await this.service.all();
  }
}
