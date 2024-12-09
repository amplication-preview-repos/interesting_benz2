import { EmailConfigWhereInput } from "./EmailConfigWhereInput";
import { EmailConfigOrderByInput } from "./EmailConfigOrderByInput";

export type EmailConfigFindManyArgs = {
  where?: EmailConfigWhereInput;
  orderBy?: Array<EmailConfigOrderByInput>;
  skip?: number;
  take?: number;
};
