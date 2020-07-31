import { Injectable } from '@nestjs/common';
import { StoreValidator } from './store.validator';
import { IStoreModel } from './model/IStoreModel';
import StoreModel from './model/StoreModel';
import { DatabaseErrorTransformer } from 'src/core/transformer/exception/DatabaseErrorTransformer';
import { UntypedObject } from 'src/core/types/UntypedObject';

@Injectable()
export class StoreService {
  constructor(private readonly validator: StoreValidator) {}

  public async create(store: IStoreModel): Promise<IStoreModel> {
    let storeCreated: IStoreModel;
    const storeValidated: IStoreModel = this.validator.create(store);
    const storeToCreate: IStoreModel = new StoreModel(storeValidated);

    try {
      storeCreated = await storeToCreate.save();
    } catch (error) {
      throw DatabaseErrorTransformer.fromError(error);
    }

    return storeCreated;
  }

  public async all(): Promise<UntypedObject> {
    return {
      'stores': await StoreModel.find(),
    };
  }
}
