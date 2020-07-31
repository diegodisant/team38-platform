import { Document } from "mongoose";

export interface IStoreModel extends Document {
  name: string;
  address: string;
  qrText: string;
}
