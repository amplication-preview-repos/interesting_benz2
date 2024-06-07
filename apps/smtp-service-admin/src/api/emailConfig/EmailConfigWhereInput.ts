import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type EmailConfigWhereInput = {
  connectionType?: "Option1";
  id?: StringFilter;
  password?: StringNullableFilter;
  port?: IntNullableFilter;
  smtpHost?: StringNullableFilter;
  username?: StringNullableFilter;
};
