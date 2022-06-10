import BannerImg from "../../../../Asset/img/banner1.webp";
import { Banner, BannerContent } from "../../../../Components/Banner/Banner";
import { WhatIsSection } from "../../../../Components/WhatIs/WhatIs";
import { ItData } from "./ItData";
import ItPricing from "./ItPricing";

const It = () => {
  const [{ whatIs }] = ItData;
  const pageTitle = "Income Tax filing (ITR)";
  return (
    <main id="gstfiling">
      <Banner bannerImage={BannerImg}>
        <BannerContent
          title={pageTitle}
          tagLine1="Business compliance"
          price="Starting @ just Rs 1499/-"
          tagLine2="Registration in India"
          paragraph=""
        />
      </Banner>
      <ItPricing {...{ pageTitle }} />
      <WhatIsSection whatIsData={whatIs} contentBlock={<ItrInfo />} />
    </main>
  );
};

const ItrInfo = () => {
  return (
    <div>
      <h3>Income can be of various forms such as :</h3>
      <ul>
        <li>Income from salary</li>
        <li>Profits and gains from business and profession</li>
        <li>Income from house property</li>
        <li>Income from capital gains</li>
        <li>
          Income from other sources such as dividend, interest on deposits,
          royalty income, winning on lottery, etc.
        </li>
      </ul>
    </div>
  );
};

export default It;
