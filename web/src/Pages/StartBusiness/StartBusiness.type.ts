export interface PlcDataType {
  registrationProcess: RegistrationProcess[];
  pricing: PricingType[];
  whatIs: WhatIs[];
}

export interface PricingType {
  basic: Basic[];
  pro: Basic[];
}

export interface Basic {
  planId: string;
  price: number;
  perks: string[];
}

export interface RegistrationProcess {
  title: string;
  paragraph: string;
}

export interface WhatIs {
  title: string;
  mainParagraph: string;
  sebParagraph: string[];
}
