import * as faker from 'faker';
import { Injectable } from "@nestjs/common";
import MobileUserModel from 'src/register/model/MobileUserModel';
import { IMobileUserModel } from "src/register/model/IMobileUserModel";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class RandomMobileUserFactory {
  private peopleLimit: number;

  constructor() {
    this.peopleLimit = 0;
  }

  public setPeopleLimit(limit: number) {
    this.peopleLimit = limit;
  }

  public async generate(): Promise<IMobileUserModel[]> {
    let userItem: IMobileUserModel;
    let savedItem: IMobileUserModel;
    const users: IMobileUserModel[] = [];
    
    for (
      let userIndex = 1;
      userIndex <= this.peopleLimit;
      userIndex++
    ) {
      userItem = this.factoryRandomItem();
      savedItem = await userItem.save();
      
      users.push(savedItem);
    }

    return users;
  }

  private factoryRandomItem(): IMobileUserModel {
    const randomMobileUser: IMobileUserModel = new MobileUserModel({
      curp: faker.random.alphaNumeric(18),
      birthDate: faker.date.between('1985-07-06', '2020-07-10'),
      gender: (Math.random() > 0.5) ? 'M' : 'F',
      deviceUuid: uuidv4(),
      isQuarantined: (Math.random() > 0.5) ? true : false,
    });

    return randomMobileUser;
  }
}
