import { UseFormReturn } from "react-hook-form";

import { OrderSummary, FormInput } from "../../../../Type";
import { useOrderSection } from "./UseOrderSection";
import { numberToCurrency } from "../../../../Utils";

import OrderDetails from "../OrderDetails";
import PlaceOrderBtn from "../buttonProps";
import DiscountSection from "../../Components/DiscountSection";
import Loader from "../../../../Components/Loader/Loader";
import { useState } from "react";

export interface OrderSectionProps extends OrderSummary {
  method: UseFormReturn<FormInput>;
  pop: React.Dispatch<React.SetStateAction<boolean>>;
  orderExistPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrderSection = ({
  method,
  planId,
  planType,
  price,
  addOnRecord,
  pop,
  orderExistPopUp,
}: OrderSectionProps) => {
  const [discountDisplay, setDiscountDisplay] = useState(false);
  const {
    allAddOnPrice,
    discountAmount,
    handleDiscount,
    handleFormSubmit,
    placeOrderState,
  } = useOrderSection({
    method,
    planId,
    planType,
    price,
    addOnRecord,
    pop,
    orderExistPopUp,
  });

  return (
    <div className="checkoutOrder">
      <h1>Order Summary</h1>
      <hr />
      <OrderDetails {...{ planId, planType, price, addOnRecord }} />
      <hr />
      <DiscountSection
        submit={handleDiscount}
        discountDisplayState={setDiscountDisplay}
      />
      <hr />
      <div className="priceSection submit">
        <h3>Subtotal</h3>
        <h3>{numberToCurrency(price + allAddOnPrice)}</h3>
      </div>
      <div
        className={
          discountDisplay
            ? "priceSection discount"
            : "priceSection discount hide"
        }
      >
        <h3>Discount</h3>
        <h3>(-) {numberToCurrency(discountAmount)}</h3>
      </div>
      <div className="priceSection total">
        <h3>Total</h3>
        <h3>{numberToCurrency(price + allAddOnPrice - discountAmount)}</h3>
      </div>
      <PlaceOrderBtn onclick={handleFormSubmit}>
        {placeOrderState ? <Loader /> : "place order"}
      </PlaceOrderBtn>
    </div>
  );
};

export default OrderSection;
