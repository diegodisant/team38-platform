import { Injectable } from '@nestjs/common';
import { BluetoothValidator } from './bluetooth.validator';
import { IBluetoothModel } from './model/IBluetoothModel';
import BluetoothModel from './model/BluetoothModel';
import { DatabaseErrorTransformer } from 'src/core/transformer/exception/DatabaseErrorTransformer';
import { UntypedObject } from 'src/core/types/UntypedObject';

@Injectable()
export class BluetoothService {
  constructor(private readonly validator: BluetoothValidator) {}

  public async create(bluetoothData: IBluetoothModel): Promise<IBluetoothModel> {
    let bluetoothDataSaved: IBluetoothModel;
    const bluetoothDataValidated: IBluetoothModel = this.validator.create(bluetoothData);
    const bluetoothDataToSave: IBluetoothModel = new BluetoothModel(bluetoothDataValidated);

    try {
      bluetoothDataSaved = await bluetoothDataToSave.save();
    } catch (error) {
      throw DatabaseErrorTransformer.fromError(error);
    }

    return bluetoothDataSaved;
  }

  public async all(): Promise<UntypedObject> {
    return {
      'bluetooth-data': await BluetoothModel.find(),
    };
  }
}
