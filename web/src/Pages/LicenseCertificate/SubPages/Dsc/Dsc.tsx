import BannerImg from "@/assets/img/banner1.webp";
import { Banner, BannerContent } from "@/Components/Banner/Banner";
import { ProcessSteps } from "@/Components/ProcessSteps/ProcessSteps";
import {
  PricingSection,
  PricingContainer,
  PricingCards,
} from "@/Components/Pricing";
import { WhatIsSection } from "@/Components/WhatIs/WhatIs";
import { DscData } from "@data/DscData";

const Dsc = () => {
  const { registrationProcess, pricing, whatIs } = DscData;
  const name = "Digital Signature Certificate. (DSC)";
  return (
    <main id="dsc">
      <Banner bannerImage={BannerImg}>
        <BannerContent
          title={name}
          tagLine1=""
          price="Starting @ just Rs 2000/-"
          tagLine2="Registration in India"
        />
      </Banner>
      <ProcessSteps processName={name} cardData={registrationProcess} />
      <PricingSection companyType={name}>
        <PricingContainer>
          <PricingCards planType="(DSC)" planData={pricing[0]} />
        </PricingContainer>
      </PricingSection>
      <WhatIsSection whatIsData={whatIs} />
    </main>
  );
};

export default Dsc;
