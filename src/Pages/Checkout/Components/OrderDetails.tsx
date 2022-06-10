import { OrderSummary } from "../../../Type/Checkout";
import { numberToCurrency } from "../../../Utils/currencyFormate";

const OrderDetails = ({
  planId,
  planType,
  price,
  addOnRecord,
}: OrderSummary) => {
  return (
    <>
      <div className="plan">
        <h2>Plan</h2>
        <div className="listing">
          <div className="listingName">
            <h3>{planType}</h3>
            <h3> Plan ({planId})</h3>
          </div>
          <div className="listingPrice">
            <h3>{numberToCurrency(price)}</h3>
          </div>
        </div>
      </div>
      {addOnRecord && (
        <div className="addOns">
          <h2>Add ons</h2>
          <div className="listing">
            <div className="listingName">
              {addOnRecord.map(({ addOnPlanId }, key) => {
                return <h3 key={key}>{addOnPlanId}</h3>;
              })}
            </div>
            <div className="listingPrice">
              {addOnRecord.map(({ addOnPrice }, key) => {
                return <h3 key={key}>{numberToCurrency(addOnPrice)}</h3>;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderDetails;
