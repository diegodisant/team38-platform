import { IBluetoothModel } from "./model/IBluetoothModel";
import Joi = require("@hapi/joi");
import { OBJECT_ID_REGEX } from "src/core/common/regex";
import { ApiValidationTransformer } from "src/core/transformer/validation/ApiValidationTransformer";
import { Injectable } from "@nestjs/common";

@Injectable()
export class BluetoothValidator {
  public create(bluetoothData: IBluetoothModel): IBluetoothModel {
    const schema: Joi.Schema = Joi.object().keys({
      mobileUserId: Joi
        .string()
        .regex(OBJECT_ID_REGEX)
        .required(),
      deviceUuid: Joi
        .string()
        .uuid()
        .required(),
      intensity: Joi
        .number()
        .required(),
      infected: Joi
        .bool()
        .required(),
    });

    return ApiValidationTransformer.fromValidationResult(
      schema.validate(bluetoothData)
    );
  }
}
