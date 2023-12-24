import BannerImg from "../../../../Asset/img/banner1.webp";
import { Banner, BannerContent } from "../../../../Components/Banner/Banner";
import { LlpData } from "./LlpData";
import { ProcessSteps } from "../../../../Components/ProcessSteps/ProcessSteps";
import {
  PricingSection,
  PricingContainer,
  PricingCards,
} from "../../../../Components/Pricing";
import { WhatIsSection } from "../../../../Components/WhatIs/WhatIs";

const Opc = () => {
  const [{ registrationProcess, pricing, whatIs }] = LlpData;
  const name = "Limited Liability Partnership ";

  return (
    <main id="plc">
      <Banner bannerImage={BannerImg}>
        <BannerContent
          title={name}
          tagLine1="Register your business with"
          price="Starting @ just Rs 8499/-"
          tagLine2="Registration in India"
        />
      </Banner>

      <ProcessSteps processName={name} cardData={registrationProcess} />

      <PricingSection companyType={name}>
        <PricingContainer>
          <PricingCards planType={name} planData={pricing[0]} />
        </PricingContainer>
      </PricingSection>

      <WhatIsSection whatIsData={whatIs} />
    </main>
  );
};

export default Opc;
