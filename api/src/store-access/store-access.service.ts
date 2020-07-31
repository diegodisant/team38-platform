import { Injectable } from '@nestjs/common';
import { UntypedObject } from 'src/core/types/UntypedObject';
import { IMobileUserModel } from 'src/register/model/IMobileUserModel';
import { IStoreModel } from 'src/store/model/IStoreModel';
import StoreModel from 'src/store/model/StoreModel';
import MobileUserModel from 'src/register/model/MobileUserModel';
import { DatabaseErrorTransformer } from 'src/core/transformer/exception/DatabaseErrorTransformer';
import StoreAccessModel from 'src/store-access/model/StoreAccessModel';
import { IStoreAccessModel } from './model/IStoreAccessModel';

@Injectable()
export class StoreAccessService {
  public async access(mobileUserId: string, qrText: string): Promise<UntypedObject> {
    let store: IStoreModel;
    let mobileUser: IMobileUserModel;
    let storeAccessSaved: IStoreAccessModel;
    let storeAccessToSave: IStoreAccessModel;

    try {
      mobileUser = await MobileUserModel.findOne(
        {
          _id: mobileUserId,
        }
      );

      store = await StoreModel.findOne(
        {
          qrText: qrText
        }
      );

      storeAccessToSave = new StoreAccessModel({
        mobileUserId: mobileUser._id,
        storeId: store._id,
        accessed: !mobileUser.isQuarantined,
      });

      storeAccessSaved = await storeAccessToSave.save();
    } catch (error) {
      throw DatabaseErrorTransformer.fromError(error);
    }

    return {
      canAccess: storeAccessSaved.accessed,
    }
  }

  public async all(): Promise<UntypedObject> {
    return {
      'store-access': await StoreAccessModel.find(),
    }
  }
}
