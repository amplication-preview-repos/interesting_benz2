import { SortOrder } from "../../util/SortOrder";

export type EmailTokenOrderByInput = {
  createdAt?: SortOrder;
  expirationDate?: SortOrder;
  id?: SortOrder;
  provider?: SortOrder;
  token?: SortOrder;
  updatedAt?: SortOrder;
};
