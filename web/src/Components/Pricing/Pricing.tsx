import React from "react";
import { PricingSectionProp } from "../../Type";

import "./Pricing.scss";

export const PricingSection: React.FC<PricingSectionProp> = ({
  children,
  companyType,
  message,
  outLink,
}) => {
  return (
    <section id="pricing">
      <div className="container">
        <div className="heading">
          <h1>
            Our <span>Pricing</span>
          </h1>
          <h3>{companyType}</h3>
          {message && <span className="pricing__message">{message}</span>}
        </div>
        {children}
      </div>
      {outLink}
    </section>
  );
};
