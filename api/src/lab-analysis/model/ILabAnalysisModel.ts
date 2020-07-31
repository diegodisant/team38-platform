import { Document, Schema } from "mongoose";

export interface ILabAnalysisModel extends Document {
  mobileUserId: Schema.Types.ObjectId;
  labName: string;
  status: boolean;
  createdAt: Date;
}
