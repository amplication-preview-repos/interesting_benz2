import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmailConfigService } from "./emailConfig.service";
import { EmailConfigControllerBase } from "./base/emailConfig.controller.base";

@swagger.ApiTags("emailConfigs")
@common.Controller("emailConfigs")
export class EmailConfigController extends EmailConfigControllerBase {
  constructor(protected readonly service: EmailConfigService) {
    super(service);
  }
}
