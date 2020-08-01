import * as faker from 'faker';
import { Injectable } from "@nestjs/common";
import { IBluetoothModel } from "src/bluetooth/model/IBluetoothModel";
import BluetoothModel from 'src/bluetooth/model/BluetoothModel';
import { v4 as uuidv4 } from 'uuid';
import { IMobileUserModel } from 'src/register/model/IMobileUserModel';

@Injectable()
export class RandomBluetoothInteractionFactory {
  public async generate(user: IMobileUserModel): Promise<IBluetoothModel> {
    let savedRandomInteraction: IBluetoothModel;
    const randomInteraction: IBluetoothModel = new BluetoothModel({
      mobileUserId: user._id,
      deviceUuid: uuidv4(),
      intensity: faker.random.number({min: -95, max: -20}),
      infected: user.isQuarantined,
    });

    savedRandomInteraction = await randomInteraction.save();

    return savedRandomInteraction;
  }
}
