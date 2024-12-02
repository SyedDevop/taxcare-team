import BannerImg from "@/assets/img/banner1.webp";
import { Banner, BannerContent } from "@/Components/Banner/Banner";
// import { ProcessSteps } from "../../../../Components/ProcessSteps/ProcessSteps";
import {
  PricingSection,
  PricingCards,
  PricingContainer,
} from "@/Components/Pricing";
import { WhatIsSection } from "@/Components/WhatIs/WhatIs";
import { PfData } from "./PfData";

const Pf = () => {
  const [{ registrationProcess, pricing, whatIs }] = PfData;
  const name = "Karnataka Professional Tax (PT)";
  // TODO3: reformat pf full form
  return (
    <main id="pt">
      <Banner bannerImage={BannerImg}>
        <BannerContent
          title={name}
          tagLine1="Business compliance"
          price="Starting @ just Rs 299/-"
          tagLine2="Registration in India"
          paragraph=""
        />
      </Banner>

      {/* <ProcessSteps processName={name} cardData={registrationProcess} /> */}

      <PricingSection companyType={name}>
        <PricingContainer>
          <PricingCards planType={name} planData={pricing[0]} />
        </PricingContainer>
      </PricingSection>

      <WhatIsSection whatIsData={whatIs} />
    </main>
  );
};

export default Pf;
