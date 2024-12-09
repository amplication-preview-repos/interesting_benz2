import { EmailToken as TEmailToken } from "../api/emailToken/EmailToken";

export const EMAILTOKEN_TITLE_FIELD = "token";

export const EmailTokenTitle = (record: TEmailToken): string => {
  return record.token?.toString() || String(record.id);
};
