import { Injectable } from '@nestjs/common';
import { RegisterValidator } from './register.validator';
import { IMobileUserModel } from './model/IMobileUserModel';
import MobileUserModel from './model/MobileUserModel';
import { DatabaseErrorTransformer } from 'src/core/transformer/exception/DatabaseErrorTransformer';

@Injectable()
export class RegisterService {
  constructor(public readonly registerValidator: RegisterValidator) {}

  public async register(mobileUser: IMobileUserModel): Promise<IMobileUserModel> {
    let userSaved: IMobileUserModel
    const userValidated: IMobileUserModel = this.registerValidator.register(mobileUser);
    const userToRegister: IMobileUserModel = new MobileUserModel(userValidated);

    try {
      userSaved = await userToRegister.save();
    } catch(error) {
      throw DatabaseErrorTransformer.fromError(error);
    }

    return userSaved;
  }
}
