import {firestore} from "firebase-admin";

/**
 * New Order Email Dynamic template data type structure.
 */
export interface NewOrderEmailTemplateType {
    subject: string;
    orderId: string;
    subjectTextColor: string;
    name: string;
    email: string;
    number: number;
    plan: {
        planType: string;
        price: number;
        planId: string;
    }[];
    addons?: {
        addOnPlanId: string;
        addOnPrice: number;
    }[];
    subtotal: number;
    discount: number;
    total: number;
}

export interface OrderData {
    clientType: string;
    orderId: string;
    orderDetails: OrderSummary;
    discountPrice: number;
    orderStates: {
        state: string;
        payment: string;
    };
    totalAmount: number;
    issuedDate?: firestore.Timestamp;
    totalAddOnAmount: number;
    userId?: string;
    tag?: string;
    clientData: FormInput;
}

export interface FormInput {
    name: string;
    email: string;
    phoneNumber: number;
}

export interface OrderSummary {
    price: number;
    addOnRecord: AddonData[];
    planType: string;
    planId: string;
}
export interface AddonData {
    // [key: string]: string | number;
    addOnPlanId: string;
    addOnPrice: number;
    IncrementAddon?: number;
}
