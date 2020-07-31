import { Injectable } from "@nestjs/common";
import { IStoreModel } from "./model/IStoreModel";
import Joi = require("@hapi/joi");
import { ApiValidationTransformer } from "src/core/transformer/validation/ApiValidationTransformer";

@Injectable()
export class StoreValidator {
  public create(store: IStoreModel) {
    const schema: Joi.Schema = Joi.object().keys({
      name: Joi
        .string()
        .required(),
      address: Joi
        .string()
        .required()
    });

    return ApiValidationTransformer.fromValidationResult(
      schema.validate(store)
    );
  }
}
