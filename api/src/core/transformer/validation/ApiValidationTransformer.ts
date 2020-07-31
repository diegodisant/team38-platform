import { ValidationResult } from "@hapi/joi";
import { ValidationErrorTransformer } from "../exception/ValidationErrorTransformer";

export class ApiValidationTransformer {
  public static fromValidationResult(validationResult: ValidationResult): any {
    const { error, value } = validationResult;

    if (error) {
      throw ValidationErrorTransformer.fromError(error);
    }

    return value;
  }
}
