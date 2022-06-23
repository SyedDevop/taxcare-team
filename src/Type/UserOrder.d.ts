import { OrderSummary } from "./Checkout";
import { Timestamp } from "firebase/firestore";

export interface UserOrderData {
  clientType: string;
  orderId: string;
  orderDetails: OrderSummary;
  discountPrice: number;
  orderStates: {
    state: string;
  };
  totalAmount: number;
  issuedDate?: Timestamp;
  totalAddOnAmount: number;
}
export interface ExistingUserOrder extends UserOrderData {
  userId: string;
  tag: string;
}

export interface NewUserOrder extends UserOrderData {
  clientData: FormInput;
}

export interface FormInput {
  name: string;
  email: string;
  phoneNumber: string;
}

export type OrderData = ExistingUserOrder | NewUserOrder;
