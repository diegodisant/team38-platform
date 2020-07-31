import { Document, Schema } from "mongoose";

export interface IStoreAccessModel extends Document {
  mobileUserId: Schema.Types.ObjectId;
  storeId: Schema.Types.ObjectId;
  accessed: boolean;
  scannedAt: Date;
}
