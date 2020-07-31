import * as connection from 'src/core/config/database/MongoConnection';
import { IBluetoothModel } from "./IBluetoothModel";
import { Schema } from "mongoose";

const BluetoothSchema: Schema = new Schema(
  {
    mobileUserId: {
      type: Schema.Types.ObjectId,
      ref: 'MobileUser',
      required: true,
    },
    deviceUuid: {
      type: String,
      required: true,
    },
    intensity: {
      type: Number,
      required: true,
    },
    infected: {
      type: Boolean,
      required: true,
    },
    capturedAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    collection: 'BluetoothData',
    versionKey: false,
  }
);

export default connection.db.model<IBluetoothModel>('BluetoothData', BluetoothSchema);
