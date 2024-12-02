import { useState } from "react";
import {
  PricingSection,
  AddonPlus,
  PricingContainer,
  PricingCards,
} from "@/Components/Pricing";
import { AddonData } from "@/Type";

import { ItData } from "./ItData";

type Props = {
  pageTitle: string;
};

const ItPricing = ({ pageTitle }: Props) => {
  const [
    {
      pricing: [plan1, plan2],
      addOns,
    },
  ] = ItData;
  const [addonData, setAddonData] = useState<AddonData[]>([]);
  const handleAddon = ({
    addOnPlanId: planId,
    addOnPrice: price,
  }: AddonData) => {
    setAddonData((pre) => {
      if (pre.some((object) => object.addOnPlanId === planId)) {
        return [...pre.filter((addOn) => addOn.addOnPlanId !== planId)];
      }
      return [...pre, { addOnPlanId: planId, addOnPrice: price }];
    });
  };

  // const reduceAddons = (addons: AddonData[]) => {
  //   return addons.reduce((acc, curr) => {
  //     return acc + curr.addOnPrice;
  //   }, 0);
  // };
  // const addonPrice = useCallback(reduceAddons, []);
  return (
    <PricingSection companyType={pageTitle}>
      <PricingContainer containerTitle="(ITR) Add On">
        <AddonPlus
          addOns={addOns}
          addOnSet={handleAddon}
          addOnSetData={addonData}
        />
      </PricingContainer>
      <PricingContainer containerTitle="(ITR) Plans for Business Associates">
        <PricingCards
          planType="(ITR) for Business"
          planData={plan1}
          addons={addonData}
        />
      </PricingContainer>
      <PricingContainer containerTitle="(ITR) Plans for Salaried Employees">
        <PricingCards
          planType="(ITR) for Employees"
          planData={plan2}
          addons={addonData}
        />
      </PricingContainer>
    </PricingSection>
  );
};

export default ItPricing;
