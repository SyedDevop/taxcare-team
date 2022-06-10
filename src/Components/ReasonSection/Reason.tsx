import React from "react";
import { ReactComponent as HelpIcon } from "../../Asset/svg/help.svg";
import { ReactComponent as SecurityIcon } from "../../Asset/svg/Group.svg";
import { ReactComponent as PlaningIcon } from "../../Asset/svg/planing.svg";
import { ReactComponent as PaymentIcon } from "../../Asset/svg/payments.svg";
import { ReactComponent as AssistIcon } from "../../Asset/svg/assist.svg";
import "./Reason.scss";
import ReasonCard from "./ReasonCard";

interface Props {}

const Reason: React.FC<Props> = (props) => {
  return (
    <section id="reason">
      <div className="container">
        <h1>
          Why <span>Associate</span> with us!!
        </h1>

        <div className="gridTemplate">
          <ReasonCard
            svg={<HelpIcon />}
            heading="Experience Team"
            paragraph="Our Experience and expertise helps you bring change in specific Business problems."
          />
          <ReasonCard
            svg={<SecurityIcon />}
            heading="Security"
            paragraph="We Ensure Highest level of Confidentiality and integrity regarding Business information. "
          />
          <ReasonCard
            svg={<PlaningIcon />}
            heading="Planning"
            paragraph="We help you in better tax planning thereby reducing your tax burden to maximum extent."
          />
          <ReasonCard
            svg={<PaymentIcon />}
            heading="Affordable Pricing"
            paragraph="We help you achieve excellence in your accounting system and financial reporting processes assuring most reasonable prices."
          />
          <ReasonCard
            svg={<AssistIcon />}
            heading="Expert Assist  "
            paragraph="We assist in Compliance with business laws and Regulation and timely update of any changes in those regulations."
          />
        </div>
      </div>
    </section>
  );
};

export default Reason;
