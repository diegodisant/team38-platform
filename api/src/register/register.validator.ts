import { IMobileUserModel } from "./model/IMobileUserModel";
import Joi = require("@hapi/joi");
import { ApiValidationTransformer } from "src/core/transformer/validation/ApiValidationTransformer";
import { Injectable } from "@nestjs/common";

@Injectable()
export class RegisterValidator {
  public register(mobileUser: IMobileUserModel): IMobileUserModel {
    const schema: Joi.Schema = Joi.object().keys({
      curp: Joi
        .string()
        .regex(/^[A-Z0-9]+$/)
        .required(),
      birthDate: Joi
        .date()
        .required(),
      gender: Joi
        .string()
        .regex(/^(M|F)$/)
        .required(),
      deviceUuid: Joi
        .string()
        .uuid()
        .required(),
      isQuarantined: Joi
        .bool()
        .required(),
    });

    return ApiValidationTransformer.fromValidationResult(
      schema.validate(mobileUser)
    );
  }
}
