import BannerImg from "../../Asset/img/banner1.webp";
import { Banner, BannerContent } from "../../Components/Banner/Banner";
import {
  PricingSection,
  PricingCards,
  PricingContainer,
} from "../../Components/Pricing";
import { WhatIsSection } from "../../Components/WhatIs/WhatIs";
import { ProjectReportData } from "./ProjectReportData";

const ProjectReport = () => {
  const [{ pricing, whatIs }] = ProjectReportData;
  const [plan] = pricing;
  return (
    <main id="projectReport">
      <Banner bannerImage={BannerImg}>
        <BannerContent
          title="Project Report"
          tagLine1="Register your business with"
          price="Starting @ just Rs 7599/-"
          tagLine2="Registration in India"
        />
      </Banner>
      <PricingSection companyType="Project Report">
        <PricingContainer>
          <PricingCards planType="Project Report" planData={plan} />
        </PricingContainer>
      </PricingSection>
      {/* <WhatIsSection whatIsData={whatIs} /> */}
    </main>
  );
};

export default ProjectReport;
