import { IUserModel } from "src/user/model/IUserModel";
import Joi = require("@hapi/joi");
import { ValidationErrorTransformer } from "src/core/transformer/exception/ValidationErrorTransformer";
import { ApiValidationTransformer } from "src/core/transformer/validation/ApiValidationTransformer";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthValidator {
  public signUp(user: IUserModel): IUserModel {
    const schema: Joi.Schema = Joi.object().keys({
      name: Joi
        .string()
        .required(),
      email: Joi
        .string()
        .email()
        .required(),
      password: Joi
        .string()
        .required(),
    });
    
    return ApiValidationTransformer.fromValidationResult(
      schema.validate(user)
    );
  }
  
  public signIn(user: IUserModel): IUserModel {
    const schema: Joi.Schema = Joi.object().keys({
      email: Joi
        .string()
        .email()
        .required(),
      password: Joi
        .string()
        .required(),
    });
    
    return ApiValidationTransformer.fromValidationResult(
      schema.validate(user)
    );
  }
}
