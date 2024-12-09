import * as graphql from "@nestjs/graphql";
import { EmailConfigResolverBase } from "./base/emailConfig.resolver.base";
import { EmailConfig } from "./base/EmailConfig";
import { EmailConfigService } from "./emailConfig.service";

@graphql.Resolver(() => EmailConfig)
export class EmailConfigResolver extends EmailConfigResolverBase {
  constructor(protected readonly service: EmailConfigService) {
    super(service);
  }
}
