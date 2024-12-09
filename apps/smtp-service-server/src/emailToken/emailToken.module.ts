import { Module } from "@nestjs/common";
import { EmailTokenModuleBase } from "./base/emailToken.module.base";
import { EmailTokenService } from "./emailToken.service";
import { EmailTokenController } from "./emailToken.controller";
import { EmailTokenResolver } from "./emailToken.resolver";

@Module({
  imports: [EmailTokenModuleBase],
  controllers: [EmailTokenController],
  providers: [EmailTokenService, EmailTokenResolver],
  exports: [EmailTokenService],
})
export class EmailTokenModule {}
