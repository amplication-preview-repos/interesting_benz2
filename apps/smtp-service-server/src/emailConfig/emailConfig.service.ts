import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmailConfigServiceBase } from "./base/emailConfig.service.base";

@Injectable()
export class EmailConfigService extends EmailConfigServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
