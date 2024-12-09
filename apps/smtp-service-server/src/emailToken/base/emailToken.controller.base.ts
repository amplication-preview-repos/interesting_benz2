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
import { EmailTokenService } from "../emailToken.service";
import { EmailTokenCreateInput } from "./EmailTokenCreateInput";
import { EmailToken } from "./EmailToken";
import { EmailTokenFindManyArgs } from "./EmailTokenFindManyArgs";
import { EmailTokenWhereUniqueInput } from "./EmailTokenWhereUniqueInput";
import { EmailTokenUpdateInput } from "./EmailTokenUpdateInput";

export class EmailTokenControllerBase {
  constructor(protected readonly service: EmailTokenService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EmailToken })
  async createEmailToken(
    @common.Body() data: EmailTokenCreateInput
  ): Promise<EmailToken> {
    return await this.service.createEmailToken({
      data: data,
      select: {
        createdAt: true,
        expirationDate: true,
        id: true,
        provider: true,
        token: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [EmailToken] })
  @ApiNestedQuery(EmailTokenFindManyArgs)
  async emailTokens(@common.Req() request: Request): Promise<EmailToken[]> {
    const args = plainToClass(EmailTokenFindManyArgs, request.query);
    return this.service.emailTokens({
      ...args,
      select: {
        createdAt: true,
        expirationDate: true,
        id: true,
        provider: true,
        token: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: EmailToken })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async emailToken(
    @common.Param() params: EmailTokenWhereUniqueInput
  ): Promise<EmailToken | null> {
    const result = await this.service.emailToken({
      where: params,
      select: {
        createdAt: true,
        expirationDate: true,
        id: true,
        provider: true,
        token: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: EmailToken })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateEmailToken(
    @common.Param() params: EmailTokenWhereUniqueInput,
    @common.Body() data: EmailTokenUpdateInput
  ): Promise<EmailToken | null> {
    try {
      return await this.service.updateEmailToken({
        where: params,
        data: data,
        select: {
          createdAt: true,
          expirationDate: true,
          id: true,
          provider: true,
          token: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: EmailToken })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteEmailToken(
    @common.Param() params: EmailTokenWhereUniqueInput
  ): Promise<EmailToken | null> {
    try {
      return await this.service.deleteEmailToken({
        where: params,
        select: {
          createdAt: true,
          expirationDate: true,
          id: true,
          provider: true,
          token: true,
          updatedAt: true,
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

  @common.Get("/:id/create-email-token")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async CreateEmailToken(
    @common.Body()
    body: string
  ): Promise<string> {
    return this.service.CreateEmailToken(body);
  }

  @common.Get("/:id/get-email-token")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GetEmailToken(
    @common.Body()
    body: string
  ): Promise<string> {
    return this.service.GetEmailToken(body);
  }
}
