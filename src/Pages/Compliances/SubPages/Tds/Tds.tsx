import React from "react";
import BannerImg from "../../../../Asset/img/banner1.webp";
import { Banner, BannerContent } from "../../../../Components/Banner/Banner";
import { ProcessSteps } from "../../../../Components/ProcessSteps/ProcessSteps";
import {
  PricingSection,
  PricingCards,
  PricingContainer,
} from "../../../../Components/Pricing";
import { WhatIsSection } from "../../../../Components/WhatIs/WhatIs";
import { TdsData } from "./TdsData";

const Tds = () => {
  const [{ registrationProcess, pricing, whatIs }] = TdsData;
  const pageTitle = "Tax Deducted at Source filing (TDS)";
  return (
    <main id="tds">
      <Banner bannerImage={BannerImg}>
        <BannerContent
          title={pageTitle}
          tagLine1="Business compliance"
          price="Starting @ just just Rs 1199/-"
          tagLine2="filing in India"
          paragraph=""
        />
      </Banner>
      {/* <ProcessSteps processName={pageTitle} cardData={registrationProcess} /> */}
      <PricingSection companyType={pricing[0].title}>
        <PricingContainer>
          <PricingCards planType="(TDS) filing" planData={pricing[0]} />
        </PricingContainer>
      </PricingSection>
      <WhatIsSection whatIsData={whatIs} />
    </main>
  );
};

export default Tds;
