import { useEffect, useState, MouseEvent } from "react";
import OurServicesList from "./OurServicesListData";
import { OurServiceList as ServicesType } from "./ServiceType";

const fetchServicesData = (serviceName: string): ServicesType[] => {
  const [serviceObject] = OurServicesList.filter((service: ServicesType) => {
    return Object.keys(service)[0] === serviceName;
  });
  const { [serviceName as keyof typeof serviceObject]: data }: ServicesType =
    serviceObject;
  return data;
};

export function useServiceState(name: string) {
  const [btnActive, setBtnActive] = useState<string>(name);
  const [serviceList, setServiceList] = useState<ServicesType[]>([]);
  useEffect(() => {
    setServiceList(fetchServicesData(btnActive));
  }, [btnActive]);
  function handleClicks(
    event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ): void {
    const btnName: string = event.currentTarget.name;
    setBtnActive(btnName);
  }

  return { serviceList, btnActive, handleClicks };
}
