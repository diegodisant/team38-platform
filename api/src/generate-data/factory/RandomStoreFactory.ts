import * as faker from 'faker';
import { Injectable } from "@nestjs/common";
import StoreModel from 'src/store/model/StoreModel';
import { IStoreModel } from "src/store/model/IStoreModel";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class RandomStoreFactory {
  private storeLimit: number;

  constructor() {
    this.storeLimit = 0;
  }

  public setStoreLimit(limit: number) {
    this.storeLimit = limit;
  }

  public async generate(): Promise<IStoreModel[]> {
    let storeItem: IStoreModel;
    let savedItem: IStoreModel;
    const stores: IStoreModel[] = [];
    
    for (
      let storeIndex = 1;
      storeIndex <= this.storeLimit;
      storeIndex++
    ) {
      storeItem = this.factoryRandomItem();
      savedItem = await storeItem.save();
      
      stores.push(savedItem);
    }

    return stores;
  }

  private factoryRandomItem(): IStoreModel {
    const randomMobileUser: IStoreModel = new StoreModel({
      name: faker.random.arrayElement(['Walmart', 'Cotsco', 'Chedraui', 'Aurrera', 'Comercial']),
      address: faker.address.streetAddress(true),
    });

    return randomMobileUser;
  }
}
