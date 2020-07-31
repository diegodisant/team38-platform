import { Injectable } from "@nestjs/common";
import { IMobileUserModel } from "src/register/model/IMobileUserModel";
import Joi = require("@hapi/joi");
import { OBJECT_ID_REGEX } from "src/core/common/regex";
import { ApiValidationTransformer } from "src/core/transformer/validation/ApiValidationTransformer";

@Injectable()
export class QuarantinedValidator {
  public quarantined(mobileUser: IMobileUserModel): IMobileUserModel {
    const schema: Joi.Schema = Joi.object().keys({
      isQuarantined: Joi
        .bool()
        .required(),
    });

    return ApiValidationTransformer.fromValidationResult(
      schema.validate(mobileUser)
    );
  }
}
