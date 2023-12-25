import BannerImg from "../../assets/img/banner1.webp";
import { Banner, BannerContent } from "@/Components/Banner/Banner";
import {
  PricingSection,
  PricingCards,
  PricingContainer,
} from "../../Components/Pricing";
// import { WhatIsSection } from "../../Components/WhatIs/WhatIs";
import { AccountingData } from "./AccountingData";

const Accounting = () => {
  const [
    {
      pricing: [plan1, plan2],
      // whatIs,
    },
  ] = AccountingData;
  const pageTitle = "Accounting and Book keeping";
  return (
    <main id="accounting">
      <Banner bannerImage={BannerImg}>
        <BannerContent
          title={pageTitle}
          tagLine1="Get your accounting done"
          price="Starting @ just Rs 2499/-"
          tagLine2=""
          paragraph="Select a plan as per your requirements."
        />
      </Banner>
      <PricingSection companyType={pageTitle}>
        <PricingContainer containerTitle="Accounting Plan for (Pvt Ltd Co. & LLP)">
          <PricingCards planType="A/c (Pvt Ltd Co. & LLP)" planData={plan1} />
        </PricingContainer>
        <PricingContainer containerTitle="Accounting Plan for (Individual & Partnership)">
          <PricingCards
            planType="A/c (Individual & Partnership)"
            planData={plan2}
          />
        </PricingContainer>
      </PricingSection>
      {/* <WhatIsSection whatIsData={whatIs} /> */}
    </main>
  );
};

export default Accounting;
