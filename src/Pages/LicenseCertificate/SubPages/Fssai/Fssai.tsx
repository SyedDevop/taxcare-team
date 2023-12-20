import BannerImg from "../../../../Asset/img/banner1.webp";
import { Banner, BannerContent } from "../../../../Components/Banner/Banner";
import { ProcessSteps } from "../../../../Components/ProcessSteps/ProcessSteps";
import {
  PricingSection,
  PricingCards,
  PricingContainer,
} from "../../../../Components/Pricing";
import { WhatIsSection } from "../../../../Components/WhatIs/WhatIs";
import OutBoundLink from "../../../../Components/OutBoundLink/OutBoundLink";
import { FssaiData } from "./FssaiData";

const Fssai = () => {
  const [{ registrationProcess, pricing, whatIs }] = FssaiData;
  const name = "Food Safety and Standards Authority of India (FSSAI)";
  return (
    <main id="fssai">
      <Banner bannerImage={BannerImg}>
        <BannerContent
          title={name}
          tagLine1="Register your business with"
          price="Starting @ just Rs 1399/-"
          tagLine2="Registration in India"
        />
      </Banner>
      <ProcessSteps processName={name} cardData={registrationProcess} />
      <PricingSection
        companyType={name}
        message="Excluding the Government Fees*"
        outLink={
          <OutBoundLink link="https://foscos.fssai.gov.in/assets/docs/KindofBusinessEligibility.pdf" />
        }
      >
        <PricingContainer>
          <PricingCards planType="(FSSAI) License" planData={pricing[0]} />
        </PricingContainer>
      </PricingSection>
      <WhatIsSection whatIsData={whatIs} />
    </main>
  );
};

export default Fssai;
