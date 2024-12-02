import { ReactNode } from "react";
export interface PricingSectionProp {
  /** A Children need to be passed to the for this Component*/
  children: ReactNode;
  /** A Company needs to be passed to the for this in string*/
  companyType: string;
  /** Any important message to be notified*/
  message?: string;
  /** Out bound link*/
  outLink?: ReactNode;
}

export interface PricingCardsProp {
  planData: PricingData;
  planType: string;
  paymentInterval?: string;
  addons?: AddonData[];
}

export interface PriceCardProp {
  title?: string;
  planData: PlanData;
  repeatedPerks?: string[];
  planType: string;
  paymentInterval?: string;
  addons?: AddonData[];
}

export interface PlanData {
  planId: string;
  price: number;
  subTitle?: string;
  perPlanPerks?: string[];
}

export interface PricingData {
  title?: string;
  plan: PlanData[];
  repeatedPerks?: string[];
}
export interface PricingContainerProp {
  containerTitle?: string;
  children?: React.ReactNode;
}

export interface AddonPlusProps {
  addOns: {
    addOnPlanId: string;
    addOnPrice: number;
    perks: string;
  }[];
  addOnSet: ({ addOnPlanId, addOnPrice }: AddonData) => void;
  addOnSetData: AddonData[];
}

export interface AddonData {
  // [key: string]: string | number;
  addOnPlanId: string;
  addOnPrice: number;
  IncrementAddon?: number;
}
