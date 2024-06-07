export type EmailTokenCreateInput = {
  expirationDate?: Date | null;
  provider?: "Option1" | null;
  token?: string | null;
};
