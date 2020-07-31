import * as connection from 'src/core/config/database/MongoConnection';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { Schema } from 'mongoose';
import { NextFunction } from 'express';
import { IUserModel } from './IUserModel';
import { HttpExceptionTransformer } from 'src/core/transformer/exception/HttpExceptionTransformer';

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: false,
      default: Date.now(),
    },
  },
  {
    collection: 'User',
    versionKey: false,
  }
)
  .pre('save', async function(next: NextFunction): Promise<void> {
    // @ts-ignore
    const user: IUserModel = this;

    if (!user.password) {
      return next();
    }

    try {
      const salt: string = await bcrypt.genSalt(10);
      const hash: string = await bcrypt.hash(user.password, salt);

      user.password = hash;

      next();
    } catch (error) {
      throw HttpExceptionTransformer.fromError(error);
    }
  });


UserSchema.methods.comparePassword = async function name(password: string): Promise<boolean> {
  try {
    const match: boolean = await bcrypt.compare(password, this.password);

    return match;
  } catch (error) {
    throw HttpExceptionTransformer.fromError(error);
  }
}

export default connection.db.model<IUserModel>('User', UserSchema);
