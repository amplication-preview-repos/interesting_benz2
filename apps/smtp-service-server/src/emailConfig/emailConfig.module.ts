import { Module } from "@nestjs/common";
import { EmailConfigModuleBase } from "./base/emailConfig.module.base";
import { EmailConfigService } from "./emailConfig.service";
import { EmailConfigController } from "./emailConfig.controller";
import { EmailConfigResolver } from "./emailConfig.resolver";

@Module({
  imports: [EmailConfigModuleBase],
  controllers: [EmailConfigController],
  providers: [EmailConfigService, EmailConfigResolver],
  exports: [EmailConfigService],
})
export class EmailConfigModule {}
