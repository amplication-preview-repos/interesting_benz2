export type EmailToken = {
  createdAt: Date;
  expirationDate: Date | null;
  id: string;
  provider?: "Option1" | null;
  token: string | null;
  updatedAt: Date;
};
