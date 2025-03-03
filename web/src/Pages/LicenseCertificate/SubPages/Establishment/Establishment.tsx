import BannerImg from "@/assets/img/banner1.webp";
import { Banner, BannerContent } from "@/Components/Banner/Banner";
import { ProcessSteps } from "@/Components/ProcessSteps/ProcessSteps";
import {
  PricingSection,
  PricingCards,
  PricingContainer,
} from "@/Components/Pricing";
import { WhatIsSection } from "@/Components/WhatIs/WhatIs";
import { EstablishData } from "@data/EstablishmentData";
import OutBoundLink from "@/Components/OutBoundLink/OutBoundLink";

const Establishment = () => {
  const { registrationProcess, pricing, whatIs } = EstablishData;
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
    <>
      <h3
        style={{
          textAlign: "center",
          marginBottom: "1rem",
          color: "#fff",
          letterSpacing: "1px",
        }}
      >
        Registration Fee
      </h3>
      <table
        style={{
          width: "100%",
          borderCollapse: "separate",
          borderSpacing: "0",
          background: "rgba(255, 255, 255, 0.1)",
          color: "#fff",
          minWidth: "600px",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
            <th
              style={{
                padding: "16px",
                borderBottom: "2px solid rgba(255, 255, 255, 0.3)",
                textAlign: "left",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              No. of Employees
            </th>
            <th
              style={{
                padding: "16px",
                borderBottom: "2px solid rgba(255, 255, 255, 0.3)",
                textAlign: "left",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Fee (Rs.)
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            ["No Employees", "405/-"],
            ["1 to 9 Employees", "810/-"],
            ["10 to 19 Employees", "5,400/-"],
            ["20 to 49 Employees", "13,500/-"],
            ["50 to 99 Employees", "27,000/-"],
            ["100 to 250 Employees", "54,000/-"],
            ["251 to 500 Employees", "67,500/-"],
            ["501 to 1000 Employees", "94,500/-"],
            ["Above 1000 Employees", "1,01,250/-"],
          ].map(([employees, fee], index) => (
            <tr
              key={index}
              style={{
                backgroundColor:
                  index % 2 === 0
                    ? "rgba(255, 255, 255, 0.15)"
                    : "rgba(255, 255, 255, 0.1)",
                transition: "background-color 0.3s ease",
                cursor: "pointer",
              }}
            >
              <td
                style={{
                  padding: "16px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                  fontSize: "14px",
                }}
              >
                {employees}
              </td>
              <td
                style={{
                  padding: "16px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                  fontSize: "14px",
                }}
              >
                {fee}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Establishment;
