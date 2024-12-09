/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { EmailConfig } from "./EmailConfig";
import { EmailConfigCountArgs } from "./EmailConfigCountArgs";
import { EmailConfigFindManyArgs } from "./EmailConfigFindManyArgs";
import { EmailConfigFindUniqueArgs } from "./EmailConfigFindUniqueArgs";
import { CreateEmailConfigArgs } from "./CreateEmailConfigArgs";
import { UpdateEmailConfigArgs } from "./UpdateEmailConfigArgs";
import { DeleteEmailConfigArgs } from "./DeleteEmailConfigArgs";
import { EmailConfigUpdateInput } from "./EmailConfigUpdateInput";
import { EmailConfigService } from "../emailConfig.service";
@graphql.Resolver(() => EmailConfig)
export class EmailConfigResolverBase {
  constructor(protected readonly service: EmailConfigService) {}

  async _emailConfigsMeta(
    @graphql.Args() args: EmailConfigCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [EmailConfig])
  async emailConfigs(
    @graphql.Args() args: EmailConfigFindManyArgs
  ): Promise<EmailConfig[]> {
    return this.service.emailConfigs(args);
  }

  @graphql.Query(() => EmailConfig, { nullable: true })
  async emailConfig(
    @graphql.Args() args: EmailConfigFindUniqueArgs
  ): Promise<EmailConfig | null> {
    const result = await this.service.emailConfig(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => EmailConfig)
  async createEmailConfig(
    @graphql.Args() args: CreateEmailConfigArgs
  ): Promise<EmailConfig> {
    return await this.service.createEmailConfig({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => EmailConfig)
  async updateEmailConfig(
    @graphql.Args() args: UpdateEmailConfigArgs
  ): Promise<EmailConfig | null> {
    try {
      return await this.service.updateEmailConfig({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => EmailConfig)
  async deleteEmailConfig(
    @graphql.Args() args: DeleteEmailConfigArgs
  ): Promise<EmailConfig | null> {
    try {
      return await this.service.deleteEmailConfig(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Query(() => String)
  async CreateEmailConfig(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateEmailConfig(args);
  }

  @graphql.Query(() => String)
  async GetEmailConfig(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetEmailConfig(args);
  }

  @graphql.Mutation(() => String)
  async SendEmail(
    @graphql.Args()
    args: EmailConfigUpdateInput
  ): Promise<string> {
    return this.service.SendEmail(args);
  }
}
