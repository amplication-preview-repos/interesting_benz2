import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EmailTokenWhereInput = {
  expirationDate?: DateTimeNullableFilter;
  id?: StringFilter;
  provider?: "Option1";
  token?: StringNullableFilter;
};
