import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmailTokenServiceBase } from "./base/emailToken.service.base";

@Injectable()
export class EmailTokenService extends EmailTokenServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
