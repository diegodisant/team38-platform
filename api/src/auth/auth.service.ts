import { Injectable, NotAcceptableException } from '@nestjs/common';
import { IUserModel } from 'src/user/model/IUserModel';
import { AuthValidator } from './auth.validator';
import UserModel from 'src/user/model/UserModel';
import * as jwt from 'jsonwebtoken';
import config from 'src/core/config/env/EnvConfiguration';

@Injectable()
export class AuthService {
  constructor(private readonly authValidator: AuthValidator) {}

  public async signUp(user: IUserModel): Promise<IUserModel> {
    const userValidated: IUserModel = this.authValidator.signUp(user);
    const userToSave: IUserModel = new UserModel(userValidated);
    const currentUser: IUserModel = await UserModel.findOne({
      email: userToSave.email,
    });

    if (currentUser) {
      throw new NotAcceptableException(
        `User with email: ${userValidated.email} already exists and cannot be registered`
      );
    }

    const userSaved: IUserModel = await userToSave.save();

    return userSaved;
  }

  public async signIn(user: IUserModel): Promise<IUserModel> {
    const userValidated: IUserModel = this.authValidator.signIn(user);

    const currentUser: IUserModel = await UserModel.findOne({
      email: userValidated.email,
    });

    const userExists: boolean = (
      currentUser &&
      await currentUser.comparePassword(userValidated.password)
    );

    if (userExists) {
      return currentUser;
    }

    throw new NotAcceptableException('Email or password invalid, try to log again');
  }

  public async validateUser(payload: IUserModel): Promise<boolean> {
    const user: IUserModel = await UserModel.findOne({
      email: payload.email,
    });

    return !!user;
  }

  public buildJwtToken(user: IUserModel): string {
    return jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      config.secret,
      {
        expiresIn: '7d',
      }
    );
  }
}
