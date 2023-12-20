import BannerImg from "../../../../Asset/img/banner1.webp";
import { Banner, BannerContent } from "../../../../Components/Banner/Banner";
import { PlcData } from "./PlcData";
import { ProcessSteps } from "../../../../Components/ProcessSteps/ProcessSteps";
import {
  PricingSection,
  PricingCards,
  PricingContainer,
} from "../../../../Components/Pricing";
import { WhatIsSection } from "../../../../Components/WhatIs/WhatIs";

const Plc = () => {
  const [{ registrationProcess, pricing, whatIs }] = PlcData;
  const name = "Private Limited Company";
  //"filing"
  return (
    <main id="plc">
      <Banner bannerImage={BannerImg}>
        <BannerContent
          title={name}
          tagLine1="Register your business with"
          price="Starting @ just Rs 7999/-"
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

export default Plc;
