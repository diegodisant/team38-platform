import { Document } from "mongoose";

export interface IMobileUserModel extends Document {
  curp: string;
  birthDate: Date;
  gender: string;
  deviceUuid: string;
  isQuarantined: boolean;
  createdAt: Date;
}
