import { v4 as uuid } from "uuid";

export const orderIdGenerator = (): string => {
  return uuid().substring(0, 10).toUpperCase().replace("-", "");
};
