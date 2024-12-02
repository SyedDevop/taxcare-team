import { useCallback } from "react";
// import { useHistory } from "react-router-dom";

import { PriceCardProp } from "@/Type";
import PerksList from "../PerksList";
// import Button from "../PricingButton";
//
// import { useLocalStorage } from "@/Hooks";

// TODO: remove the prop name (PricingProp)
// TODO: remove text.scss
const PriceCard = ({
  planData,
  title,
  // planType,
  paymentInterval,
  repeatedPerks,
  addons,
}: PriceCardProp) => {
  const { planId, price, subTitle, perPlanPerks } = planData;
  // const history = useHistory();
  // const [, setOrders] = useLocalStorage("orderData");
  const perks = repeatedPerks || perPlanPerks;

  const addonPrice = useCallback(() => {
    if (addons) {
      return addons.reduce((acc, curr) => {
        return acc + curr.addOnPrice;
      }, 0);
    }
    return 0;
  }, [addons]);

  // const handleClicks = () => {
  //   setOrders({ price, planId, planType, addOnRecord: addons });
  //   history.push(`/checkout`);
  // };
  return (
    <div className="pricing-card">
      <h3>{planId}</h3>
      <hr />
      <h4>{title}</h4>
      <h4>{subTitle}</h4>

      <strong>
        Rs {price + addonPrice()}/- {paymentInterval && paymentInterval}
      </strong>

      <ul>
        {perks?.map((perk, key) => {
          return <PerksList key={key} perksName={perk} />;
        })}
      </ul>
      <button type="button" className="btn" disabled={true}>
        SELECT
      </button>
      {/* <Button onClick={handleClicks} /> */}
    </div>
  );
};

export default PriceCard;
