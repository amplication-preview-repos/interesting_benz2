import { SortOrder } from "../../util/SortOrder";

export type EmailConfigOrderByInput = {
  connectionType?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  password?: SortOrder;
  port?: SortOrder;
  smtpHost?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
