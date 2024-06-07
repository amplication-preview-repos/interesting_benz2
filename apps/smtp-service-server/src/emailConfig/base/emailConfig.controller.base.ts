/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { EmailConfigService } from "../emailConfig.service";
import { EmailConfigCreateInput } from "./EmailConfigCreateInput";
import { EmailConfig } from "./EmailConfig";
import { EmailConfigFindManyArgs } from "./EmailConfigFindManyArgs";
import { EmailConfigWhereUniqueInput } from "./EmailConfigWhereUniqueInput";
import { EmailConfigUpdateInput } from "./EmailConfigUpdateInput";

export class EmailConfigControllerBase {
  constructor(protected readonly service: EmailConfigService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EmailConfig })
  async createEmailConfig(
    @common.Body() data: EmailConfigCreateInput
  ): Promise<EmailConfig> {
    return await this.service.createEmailConfig({
      data: data,
      select: {
        connectionType: true,
        createdAt: true,
        id: true,
        password: true,
        port: true,
        smtpHost: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [EmailConfig] })
  @ApiNestedQuery(EmailConfigFindManyArgs)
  async emailConfigs(@common.Req() request: Request): Promise<EmailConfig[]> {
    const args = plainToClass(EmailConfigFindManyArgs, request.query);
    return this.service.emailConfigs({
      ...args,
      select: {
        connectionType: true,
        createdAt: true,
        id: true,
        password: true,
        port: true,
        smtpHost: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: EmailConfig })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async emailConfig(
    @common.Param() params: EmailConfigWhereUniqueInput
  ): Promise<EmailConfig | null> {
    const result = await this.service.emailConfig({
      where: params,
      select: {
        connectionType: true,
        createdAt: true,
        id: true,
        password: true,
        port: true,
        smtpHost: true,
        updatedAt: true,
        username: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: EmailConfig })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateEmailConfig(
    @common.Param() params: EmailConfigWhereUniqueInput,
    @common.Body() data: EmailConfigUpdateInput
  ): Promise<EmailConfig | null> {
    try {
      return await this.service.updateEmailConfig({
        where: params,
        data: data,
        select: {
          connectionType: true,
          createdAt: true,
          id: true,
          password: true,
          port: true,
          smtpHost: true,
          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: EmailConfig })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteEmailConfig(
    @common.Param() params: EmailConfigWhereUniqueInput
  ): Promise<EmailConfig | null> {
    try {
      return await this.service.deleteEmailConfig({
        where: params,
        select: {
          connectionType: true,
          createdAt: true,
          id: true,
          password: true,
          port: true,
          smtpHost: true,
          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/create-email-config")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async CreateEmailConfig(
    @common.Body()
    body: EmailConfigUpdateInput
  ): Promise<string> {
    return this.service.CreateEmailConfig(body);
  }

  @common.Get("/:id/get-email-config")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GetEmailConfig(
    @common.Body()
    body: EmailConfigUpdateInput
  ): Promise<string> {
    return this.service.GetEmailConfig(body);
  }

  @common.Post("/send-email")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async SendEmail(
    @common.Body()
    body: EmailConfigUpdateInput
  ): Promise<string> {
    return this.service.SendEmail(body);
  }
}
