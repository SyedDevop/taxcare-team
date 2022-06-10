import { AddonData } from "./Pricing";

export interface OrderData {
  price: number;
  planId: string;
  planType: string;
}
export interface OrderSummary extends OrderData {
  addOnRecord?: AddonData[];
}

export type name = string;
