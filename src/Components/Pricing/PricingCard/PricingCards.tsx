import PriceCard from "./PriceCard";
import { PricingCardsProp } from "@/Type";

const PricingCards = ({
  addons,
  planData,
  planType,
  paymentInterval,
}: PricingCardsProp) => {
  return (
    <>
      {planData.plan.map((plan, key) => {
        return (
          <PriceCard
            {...{ addons, planType, paymentInterval }}
            planData={plan}
            repeatedPerks={planData.repeatedPerks}
            title={planData.title}
            key={key}
          />
        );
      })}
    </>
  );
};

export default PricingCards;
