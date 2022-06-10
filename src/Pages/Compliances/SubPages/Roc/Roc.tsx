import BannerImg from "../../../../Asset/img/banner1.webp";
import { Banner, BannerContent } from "../../../../Components/Banner/Banner";
import { ProcessSteps } from "../../../../Components/ProcessSteps/ProcessSteps";
import {
  PricingSection,
  PricingCards,
  PricingContainer,
} from "../../../../Components/Pricing";
import { WhatIsSection } from "../../../../Components/WhatIs/WhatIs";
import { RocData } from "./RocData";

const Roc = () => {
  const [{ registrationProcess, pricing, whatIs }] = RocData;
  const pageTitle = "Registrar of Companies filing (ROC)";
  return (
    <main id="roc">
      <Banner bannerImage={BannerImg}>
        <BannerContent
          title={pageTitle}
          tagLine1="Business compliance"
          price="Starting @ just just Rs 3999/-"
          tagLine2="Registration in India"
          paragraph=""
        />
      </Banner>
      {/* <ProcessSteps processName={pageTitle} cardData={registrationProcess} /> */}
      <PricingSection companyType={pageTitle}>
        <PricingContainer>
          <PricingCards planType="(ROC) filing" planData={pricing[0]} />
        </PricingContainer>
      </PricingSection>
      <WhatIsSection whatIsData={whatIs} />
    </main>
  );
};
export default Roc;
