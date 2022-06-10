import BannerImg from "../../../../Asset/img/banner1.webp";
import { Banner, BannerContent } from "../../../../Components/Banner/Banner";
import { ProcessSteps } from "../../../../Components/ProcessSteps/ProcessSteps";
import {
  PricingSection,
  PricingCards,
  PricingContainer,
} from "../../../../Components/Pricing";
import { WhatIsSection } from "../../../../Components/WhatIs/WhatIs";
import { GstFilingData } from "./GstFilingData";

const GstFiling = () => {
  const [{ registrationProcess, pricing, whatIs }] = GstFilingData;
  const pageTitle = "Goods and Services Tax Filing (GST)";
  return (
    <main id="gstfiling">
      <Banner bannerImage={BannerImg}>
        <BannerContent
          title={pageTitle}
          tagLine1="Business compliance"
          price="Starting @ just Rs 599/-"
          tagLine2="Registration in India"
          paragraph=""
        />
      </Banner>

      {/* <ProcessSteps processName={pageTitle} cardData={registrationProcess} /> */}

      <PricingSection companyType={pageTitle}>
        <PricingContainer>
          <PricingCards
            planType="(GST) filing"
            planData={pricing[0]}
            paymentInterval="Mo"
          />
        </PricingContainer>
      </PricingSection>

      <WhatIsSection whatIsData={whatIs} />
    </main>
  );
};

export default GstFiling;
