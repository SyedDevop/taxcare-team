import BannerImg from "@/assets/img/banner1.webp";
import { Banner, BannerContent } from "@/Components/Banner/Banner";
import { ProcessSteps } from "@/Components/ProcessSteps/ProcessSteps";
import {
  PricingSection,
  PricingCards,
  PricingContainer,
} from "@/Components/Pricing";
import { WhatIsSection } from "@/Components/WhatIs/WhatIs";
import { EstablishData } from "./EstablishmentData";
import OutBoundLink from "@/Components/OutBoundLink/OutBoundLink";

const Establishment = () => {
  const [{ registrationProcess, pricing, whatIs }] = EstablishData;
  const [plan] = pricing;
  const name = "Shops & Establishments (Labour license)";
  return (
    <main id="establishment">
      <Banner bannerImage={BannerImg}>
        <BannerContent
          title={name}
          tagLine1="Get Karnataka labour license"
          price="Starting @ just Rs 1999/-"
          tagLine2="Registration in India"
        />
      </Banner>
      <ProcessSteps processName={name} cardData={registrationProcess} />
      <PricingSection
        companyType={name}
        message="Excludes all the Government Fees*"
        outLink={<OutBoundLink inPage link="whatIs" />}
      >
        <PricingContainer>
          <PricingCards planType={name} planData={plan} />
        </PricingContainer>
      </PricingSection>
      <WhatIsSection
        whatIsData={whatIs}
        contentBlock={<EstablishmentFeeStructure />}
      />
    </main>
  );
};

const EstablishmentFeeStructure = () => {
  return (
    <table>
      <tr>
        <th>Registration Fee</th>
      </tr>
      <tr>
        <th>No. of Employees</th>
        <th>Fee(Rs.)</th>
      </tr>
      <tr>
        <td>No Employees</td>
        <td>300/-</td>
      </tr>
      <tr>
        <td>1 to 9 Employees</td>
        <td>600/-</td>
      </tr>
      <tr>
        <td>10 to 19 Employees</td>
        <td>4000/-</td>
      </tr>
      <tr>
        <td>20 to 49 Employees</td>
        <td>10000/-</td>
      </tr>
      <tr>
        <td>50 to 99 Employees</td>
        <td>20000/-</td>
      </tr>
      <tr>
        <td>100 to 250 Employees</td>
        <td>40000/-</td>
      </tr>
      <tr>
        <td>251 to 500 Employees</td>
        <td>50000/-</td>
      </tr>
      <tr>
        <td>501 to 1000 Employees</td>
        <td>70000/-</td>
      </tr>
      <tr>
        <td>Above 1000 Employees</td>
        <td>75000/-</td>
      </tr>
    </table>
  );
};

export default Establishment;
