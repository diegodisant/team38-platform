import * as connection from 'src/core/config/database/MongoConnection';
import { Schema } from "mongoose";
import { ILabAnalysisModel } from './ILabAnalysisModel';

const LabAnalysisSchema: Schema = new Schema(
  {
    mobileUserId: {
      type: Schema.Types.ObjectId,
      ref: 'MobileUser',
      required: true
    },
    labName: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    collection: 'LabAnalysis',
    versionKey: false,
  }
);

export default connection.db.model<ILabAnalysisModel>('LabAnalysis', LabAnalysisSchema);
