import * as connection from 'src/core/config/database/MongoConnection';
import { Schema } from 'mongoose';
import { IMobileUserModel } from './IMobileUserModel';

const MobileUserSchema: Schema = new Schema(
  {
    curp: {
      type: String,
      trim: true,
      required: true
    },
    birthDate: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      trim: true,
    },
    deviceUuid: {
      type: String,
      required: true,
      trim: true,
    },
    isQuarantined: {
      type: Boolean,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    collection: 'MobileUser',
    versionKey: false,
  }
);

MobileUserSchema.index(
  {
    curp: 1,
    deviceUuid: 1,
  },
  {
    unique: true,
  }
);

export default connection.db.model<IMobileUserModel>('MobileUser', MobileUserSchema);
