import * as graphql from "@nestjs/graphql";
import { EmailTokenResolverBase } from "./base/emailToken.resolver.base";
import { EmailToken } from "./base/EmailToken";
import { EmailTokenService } from "./emailToken.service";

@graphql.Resolver(() => EmailToken)
export class EmailTokenResolver extends EmailTokenResolverBase {
  constructor(protected readonly service: EmailTokenService) {
    super(service);
  }
}
