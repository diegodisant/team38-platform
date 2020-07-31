import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { QuarantinedValidator } from './quarantined.validator';
import { IMobileUserModel } from 'src/register/model/IMobileUserModel';
import MobileUserModel from 'src/register/model/MobileUserModel';
import { DatabaseErrorTransformer } from 'src/core/transformer/exception/DatabaseErrorTransformer';
import { QueryCursor } from 'mongoose';
import { UntypedObject } from 'src/core/types/UntypedObject';

@Injectable()
export class QuarantinedService {
  constructor(public readonly quarantinedValidator: QuarantinedValidator) {}

  public async quarantined(mobileUserId: string, mobileUser: IMobileUserModel): Promise<UntypedObject> {
    let updateResult: QueryCursor<IMobileUserModel>;
    const userToUpdate: IMobileUserModel = this.quarantinedValidator.quarantined(mobileUser);

    try {
      updateResult = await MobileUserModel.updateOne(
        {
          _id: mobileUserId,
        },
        userToUpdate
      );
    } catch(error) {
      throw DatabaseErrorTransformer.fromError(error)
    }

    // @ts-ignore
    if (updateResult.nModified === 0) {
      throw new UnprocessableEntityException(`Can't update mobile user quarantined status with id: ${mobileUserId}`);
    }

    return {
      statusCode: 200,
      message: 'Mobile user marked as quarantined',
    };
  }

  public async checkStatusByUserId(mobileUserId: string): Promise<UntypedObject> {
    let mobileUser: IMobileUserModel;

    try {
      mobileUser = await MobileUserModel.findOne(
        {
          _id: mobileUserId
        }
      );
    } catch(error) {
      throw DatabaseErrorTransformer.fromError(error);
    }

    return {
      isQuarantined: mobileUser.isQuarantined,
    };
  }
}
