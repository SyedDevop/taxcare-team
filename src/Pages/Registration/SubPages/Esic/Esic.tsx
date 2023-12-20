import { useState } from "react";

import BannerImg from "../../../../Asset/img/banner1.webp";
import { Banner, BannerContent } from "../../../../Components/Banner/Banner";
import { ProcessSteps } from "../../../../Components/ProcessSteps/ProcessSteps";
import {
  PricingSection,
  PricingContainer,
  PricingCards,
  IncrementAddon,
  IncrementAddonData,
} from "../../../../Components/Pricing";
import { WhatIsSection } from "../../../../Components/WhatIs/WhatIs";
import { EsicData } from "./EsicData";

const Esic = () => {
  const [{ registrationProcess, pricing, addOns, whatIs }] = EsicData;
  const name = "Employees State Insurance Corporation (ESIC)";
  const [increment, setIncrement] = useState({
    addOnPlanId: addOns.addOnPlanId,
    addOnPrice: 0,
    IncrementAddon: 0,
  } as IncrementAddonData);
  const addOnSubmit = true;
  return (
    <main id="esic">
      <Banner bannerImage={BannerImg}>
        <BannerContent
          title={name}
          tagLine1="Register your business with"
          price="Starting @ just Rs 499/-"
          tagLine2="Registration in India"
        />
      </Banner>

      <ProcessSteps processName={name} cardData={registrationProcess} />

      <PricingSection companyType={name}>
        <PricingContainer>
          <PricingCards
            planType={name}
            planData={pricing[0]}
            addons={
              addOnSubmit && increment.IncrementAddon !== 0
                ? [increment]
                : undefined
            }
          />
          <IncrementAddon
            {...{ ...addOns, increment, setIncrement }}
            submit={addOnSubmit}
          />
        </PricingContainer>
      </PricingSection>

      <WhatIsSection whatIsData={whatIs} />
    </main>
  );
};

export default Esic;
