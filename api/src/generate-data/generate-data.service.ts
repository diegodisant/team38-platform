import * as faker from 'faker';
import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UntypedObject } from 'src/core/types/UntypedObject';
import { RandomMobileUserFactory } from './factory/RandomMobileUserFactory';
import { IMobileUserModel } from 'src/register/model/IMobileUserModel';
import { RandomStoreFactory } from './factory/RandomStoreFactory';
import { RandomBluetoothInteractionFactory } from './factory/RandomBluetoothInterationFactory';
import { IBluetoothModel } from 'src/bluetooth/model/IBluetoothModel';
import { IStoreModel } from 'src/store/model/IStoreModel';
import { IStoreAccessModel } from 'src/store-access/model/IStoreAccessModel';
import StoreAccessModel from 'src/store-access/model/StoreAccessModel';
import { StoreAccessService } from 'src/store-access/store-access.service';

@Injectable()
export class GenerateDataService {
  private users: IMobileUserModel[];

  private stores: IStoreModel[];

  private usersSize: number = 0;

  private storesSize: number = 0;

  constructor(
    private readonly userFactory: RandomMobileUserFactory,
    private readonly storeFactory: RandomStoreFactory,
    private readonly bluetoothFactory: RandomBluetoothInteractionFactory,
    private readonly storeAccessService: StoreAccessService,
  ) {}

  public async generate(
    days: number,
    stores: number,
    maxPeople: number, 
    maxInteractions: number
  ): Promise<UntypedObject> {
    if (
      maxPeople <= 0 ||
      stores <= 0 ||
      days <= 0 ||
      maxInteractions <= 0
    ) {
      throw new NotAcceptableException('parameters should be more than zero');
    }

    this.userFactory.setPeopleLimit(maxPeople);
    this.storeFactory.setStoreLimit(stores);
    
    this.users = await this.userFactory.generate();
    this.usersSize = this.users.length - 1;
    
    this.stores = await this.storeFactory.generate();
    this.storesSize = this.stores.length - 1;
    
    for (
      let dayCounter = 1;
      dayCounter <= days;
      dayCounter++
    ) {
      for (
        let userCounter: number = 0;
        userCounter <= this.usersSize;
        userCounter++
      ) {
        const user: IMobileUserModel = this.users[userCounter];

        /**
         * User interactions per day
         */
        for (
          let interactionCounter: number = 1;
          interactionCounter <= maxInteractions;
          interactionCounter++
        ) {
          const interactorUser: IMobileUserModel = this.getRandomUser(user._id);
          const bluetoothInteraction: IBluetoothModel = await this.bluetoothFactory.generate(interactorUser);
        }


        const storeVisits: number = Math.round(this.storesSize * Math.random());

        /**
         * Store access per day
         */
        for (
          let storeCounter: number = 1;
          storeCounter <= storeVisits;
          storeCounter++
        ) {
          const randomStore: IStoreModel = this.getRandomStore();

          await this.storeAccessService.access(user._id, randomStore.qrText);
        }
      }
    }

    return {
      message: 'created fake data successfully',
      totalPeople: maxPeople,
      totalInteractionsByPerson: maxInteractions,
      totalStores: stores,
      totalDays: days,
    };
  }

  private getRandomUser(userId: string): IMobileUserModel {
    const randomIndex: number = Math.round(Math.random() * this.usersSize);
    const randomUser: IMobileUserModel = this.users[randomIndex];

    return (randomUser._id == userId) 
      ? this.getRandomUser(userId)
      : randomUser;
  }

  private getRandomStore(): IStoreModel {
    const randomIndex: number = Math.round(Math.random() * this.storesSize);
    
    return this.stores[randomIndex];
  }
}
