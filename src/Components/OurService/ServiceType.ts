export interface ServicesList {
  OurServiceList: OurServiceList[];
}

export interface OurServiceList {
  registration?: Registration[];
  startBusiness?: StartBusiness[];
  compliance?: Compliance[];
  licenseCertificates?: LicenseCertificate[];
  other?: Other[];
}

export type Ref = {
  registration?: Registration[];
  startBusiness?: StartBusiness[];
  compliance?: Compliance[];
  licenseCertificates?: LicenseCertificate[];
  other?: Other[];

}

export interface Compliance {
  gst?: ServicesVariable[];
  itf?: ServicesVariable[];
  tds?: ServicesVariable[];
  roc?: ServicesVariable[];
}

export interface ServicesVariable {
  title: string;
  price: string;
  description: string;
  viewLink: ViewLink;
}

export enum ViewLink {
  COM = "#.com",
}

export interface LicenseCertificate {
  fssai?: ServicesVariable[];
  iec?: ServicesVariable[];
  se?: ServicesVariable[];
  msme?: ServicesVariable[];
}

export interface Other {
  accounting?: ServicesVariable[];
  iec?: ServicesVariable[];
}

export interface Registration {
  gst?: ServicesVariable[];
  pfEsic?: ServicesVariable[];
  tradeMark?: ServicesVariable[];
}

export interface StartBusiness {
  plc?: ServicesVariable[];
  llp?: ServicesVariable[];
  tradeMark?: ServicesVariable[];
}
