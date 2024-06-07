/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EmailConfigWhereUniqueInput } from "./EmailConfigWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EmailConfigUpdateInput } from "./EmailConfigUpdateInput";

@ArgsType()
class UpdateEmailConfigArgs {
  @ApiProperty({
    required: true,
    type: () => EmailConfigWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmailConfigWhereUniqueInput)
  @Field(() => EmailConfigWhereUniqueInput, { nullable: false })
  where!: EmailConfigWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => EmailConfigUpdateInput,
  })
  @ValidateNested()
  @Type(() => EmailConfigUpdateInput)
  @Field(() => EmailConfigUpdateInput, { nullable: false })
  data!: EmailConfigUpdateInput;
}

export { UpdateEmailConfigArgs as UpdateEmailConfigArgs };
