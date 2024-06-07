import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmailTokenService } from "./emailToken.service";
import { EmailTokenControllerBase } from "./base/emailToken.controller.base";

@swagger.ApiTags("emailTokens")
@common.Controller("emailTokens")
export class EmailTokenController extends EmailTokenControllerBase {
  constructor(protected readonly service: EmailTokenService) {
    super(service);
  }
}
