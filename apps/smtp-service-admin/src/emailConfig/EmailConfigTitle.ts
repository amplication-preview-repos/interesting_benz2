import { EmailConfig as TEmailConfig } from "../api/emailConfig/EmailConfig";

export const EMAILCONFIG_TITLE_FIELD = "username";

export const EmailConfigTitle = (record: TEmailConfig): string => {
  return record.username?.toString() || String(record.id);
};
