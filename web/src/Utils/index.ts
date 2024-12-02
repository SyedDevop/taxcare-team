export { numberToCurrency } from "./currencyFormate";
export { orderIdGenerator } from "./randomId";

export function isDev() {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    return true;
  }
  return false;
}

export function objectInList() {}
