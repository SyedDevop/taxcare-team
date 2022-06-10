import BannerImg from "../../../../Asset/img/banner1.webp";
import { Banner, BannerContent } from "../../../../Components/Banner/Banner";
import { ProcessSteps } from "../../../../Components/ProcessSteps/ProcessSteps";
import {
  PricingSection,
  PricingContainer,
  PricingCards,
} from "../../../../Components/Pricing";
import { WhatIsSection } from "../../../../Components/WhatIs/WhatIs";
import { ImportExportData } from "./ImportExportData";

const ImportExport = () => {
  const [{ registrationProcess, pricing, whatIs }] = ImportExportData;
  const name = "(IEC) Import Export Code";
  return (
    <main id="importExport">
      <Banner bannerImage={BannerImg}>
        <BannerContent
          title={name}
          tagLine1="Register your business with"
          price="Starting @ just Rs 2499/-"
          tagLine2="Registration in India"
          paragraph="Includes all the Government Fees* | DSC fees | GST Charges as applicable."
        />
      </Banner>
      <ProcessSteps processName={name} cardData={registrationProcess} />
      <PricingSection companyType={name}>
        <PricingContainer>
          <PricingCards
            planType="(IEC) Import Export Code"
            planData={pricing[0]}
          />
        </PricingContainer>
      </PricingSection>
      <WhatIsSection whatIsData={whatIs} />
    </main>
  );
};

export default ImportExport;
