import * as connection from 'src/core/config/database/MongoConnection';
import { Schema } from "mongoose";
import { IStoreAccessModel } from './IStoreAccessModel';

const StoreAccessSchema: Schema = new Schema(
  {
    mobileUserId: {
      type: Schema.Types.ObjectId,
      ref: 'MobileUser',
      required: true,
    },
    storeId: {
      type: Schema.Types.ObjectId,
      ref: 'Store',
      required: true,
    },
    accessed: {
      type: Boolean,
      required: true,
    },
    scannedAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    collection: 'StoreAccess',
    versionKey: false,
  }
);

export default connection.db.model<IStoreAccessModel>('StoreAccess', StoreAccessSchema);
