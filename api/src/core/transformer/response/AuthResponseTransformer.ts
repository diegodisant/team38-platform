import { IUserModel } from "src/user/model/IUserModel";
import { UntypedObject } from "src/core/types/UntypedObject";

export class AuthResponseTransformer {
  public static fromSign(user: IUserModel, jwtToken: string): UntypedObject {
    return {
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      token: jwtToken,
    };
  }
}
