import { Module } from '@nestjs/common';
import { LabAnalysisService } from './lab-analysis.service';
import { LabAnalysisValidator } from './lab-analysis.validator';
import { LabAnalysisController } from './lab-analysis.controller';

@Module({
  providers: [LabAnalysisValidator, LabAnalysisService],
  controllers: [LabAnalysisController],
})
export class LabAnalysisModule {}
