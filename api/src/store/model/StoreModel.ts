import * as connection from 'src/core/config/database/MongoConnection';
import * as crypto from 'crypto';
import { Schema } from "mongoose";
import { NextFunction } from "express";
import { IStoreModel } from "./IStoreModel";

const StoreSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    qrText: String,
  },
  {
    collection: 'Store',
    versionKey: false,
  }
)
  .pre('save', function(next: NextFunction): void {
    // @ts-ignore
    const store: IStoreModel = this;

    const hash: string = crypto
      .createHash('sha1')
      .update(store._id + store.name)
      .digest('hex');

    store.qrText = hash;

    next();
  });

export default connection.db.model<IStoreModel>('Store', StoreSchema);
