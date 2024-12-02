import { FC } from "react";

import ServicesLogo from "@svg/services-logo.svg?react";
import "./OurService.scss";
import ServiceCard from "./ServiceCard";
import { useServiceState } from "./Service";

const OurService: FC = () => {
  const {
    serviceList: list,
    btnActive,
    handleClicks,
  } = useServiceState("registration");

  return (
    <section id="OurService">
      <div className="container">
        <h1 className="title">
          Our <span>Services</span>
        </h1>
        <div className="serviceBtn">
          <button
            type="button"
            onClick={handleClicks}
            className={btnActive === "registration" ? "active btn" : "btn "}
            name="registration"
          >
            REGISTRATION
          </button>
          <button
            type="button"
            onClick={handleClicks}
            className={btnActive === "compliance" ? "active btn" : "btn "}
            name="compliance"
          >
            COMPLIANCES
          </button>
          <button
            type="button"
            onClick={handleClicks}
            className={
              btnActive === "licenseCertificates" ? "active btn" : "btn"
            }
            name="licenseCertificates"
          >
            LICENSE / CERTIFICATES
          </button>
          <button
            type="button"
            onClick={handleClicks}
            className={btnActive === "startBusiness" ? "active btn" : "btn"}
            name="startBusiness"
          >
            START BUSINESS
          </button>
          <button
            type="button"
            onClick={handleClicks}
            className={btnActive === "other" ? "active btn" : "btn"}
            name="other"
          >
            OTHER
          </button>
        </div>

        <div className="serviceCard gridTemplate" id={btnActive}>
          {list.map((service, key) => {
            const serviceKey = Object.keys(
              service,
            ).toString() as keyof typeof service;
            const {
              [serviceKey]: [
                { title },
                { price },
                { description },
                { viewLink },
              ],
            }: any = service;
            return (
              <ServiceCard
                key={key}
                title={title}
                price={price}
                description={description}
                viewLink={viewLink}
                svg={<ServicesLogo />}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurService;
