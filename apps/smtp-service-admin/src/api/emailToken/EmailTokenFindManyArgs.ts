import { EmailTokenWhereInput } from "./EmailTokenWhereInput";
import { EmailTokenOrderByInput } from "./EmailTokenOrderByInput";

export type EmailTokenFindManyArgs = {
  where?: EmailTokenWhereInput;
  orderBy?: Array<EmailTokenOrderByInput>;
  skip?: number;
  take?: number;
};
