import BannerImg from "@/assets/img/banner1.webp";
import { Banner, BannerContent } from "@/Components/Banner/Banner";
import { ProcessSteps } from "@/Components/ProcessSteps/ProcessSteps";
import {
  PricingSection,
  PricingContainer,
  PricingCards,
} from "@/Components/Pricing";
import { WhatIsSection } from "@/Components/WhatIs/WhatIs";
import { MsmeData } from "./MsmeData";

const Msme = () => {
  const [{ registrationProcess, pricing, whatIs }] = MsmeData;
  const name = "Ministry of Micro, small & Medium Enterprises. (MSME)";
  return (
    <main id="msme">
      <Banner bannerImage={BannerImg}>
        <BannerContent
          title={name}
          tagLine1="Get your udyog aadhar certificate"
          price="Starting @ just Rs 499/-"
          tagLine2="Registration in India"
        />
      </Banner>
      <ProcessSteps processName={name} cardData={registrationProcess} />
      <PricingSection companyType={name}>
        <PricingContainer>
          <PricingCards planType="(MSME)" planData={pricing[0]} />
        </PricingContainer>
      </PricingSection>
      <WhatIsSection whatIsData={whatIs} />
    </main>
  );
};

export default Msme;
