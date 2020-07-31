import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { LabAnalysisValidator } from './lab-analysis.validator';
import { ILabAnalysisModel } from './model/ILabAnalysisModel';
import LabAnalysisModel from './model/LabAnalysisModel';
import { DatabaseErrorTransformer } from 'src/core/transformer/exception/DatabaseErrorTransformer';
import { IMobileUserModel } from 'src/register/model/IMobileUserModel';
import MobileUserModel from 'src/register/model/MobileUserModel';
import { QueryCursor } from 'mongoose';
import { UntypedObject } from 'src/core/types/UntypedObject';

@Injectable()
export class LabAnalysisService {
  constructor(private readonly validator: LabAnalysisValidator) {}

  public async create(analysis: ILabAnalysisModel): Promise<ILabAnalysisModel> {
    let createdAnalysis: ILabAnalysisModel;
    let mobileUserUpdatedResult: QueryCursor<IMobileUserModel>;
    const analysisValidated: ILabAnalysisModel = this.validator.create(analysis);
    const analysisToCreate: ILabAnalysisModel = new LabAnalysisModel(analysisValidated);

    try {
      createdAnalysis = await analysisToCreate.save();

      mobileUserUpdatedResult = await MobileUserModel.updateOne(
        {
          _id: createdAnalysis.mobileUserId,
        },
        {
          isQuarantined: createdAnalysis.status,
        }
      );
    } catch(error) {
      throw DatabaseErrorTransformer.fromError(error);
    }
    
    return createdAnalysis;
  }

  public async all(): Promise<UntypedObject> {
    return {
      "lab-analysis": await MobileUserModel.find(),
    }
  }
}
