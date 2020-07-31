import { Document, Schema } from "mongoose";

export interface IBluetoothModel extends Document {
  mobileUserId: Schema.Types.ObjectId;
  deviceUuid: string;
  intensity: number;
  infected: boolean;
  capturedAt: Date;
}
