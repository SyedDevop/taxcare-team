import { ExistingUserOrder } from "../../../Type";
import { numberToCurrency } from "../../../Utils";
import "./OrdersList.scss";

const OrdersLIst = ({ list }: { list: ExistingUserOrder[] }) => {
  return (
    <main id="orderList">
      {list.map(
        (
          { discountPrice, orderDetails, orderId, orderStates, issuedDate },
          key
        ) => {
          const date = issuedDate?.toDate().toLocaleDateString();
          const allAddOnPrice =
            orderDetails.addOnRecord?.reduce(
              (total, recode) => total + recode.addOnPrice,
              0
            ) || 0;
          return (
            <div className="orders" key={key}>
              <h1>orderIn#{orderId}</h1>
              <hr />
              <div className="date">
                <h3>issue date</h3>
                <h2>{date}</h2>
              </div>
              <hr />
              <div className="plan">
                <div>
                  <h3>description</h3>
                  <h2>{orderDetails.planType}</h2>
                  <h2>plan({orderDetails.planId})</h2>
                </div>
                <div className="price">
                  <h3>amount</h3>
                  <h2>{numberToCurrency(orderDetails.price)}</h2>
                </div>
              </div>
              {orderDetails.addOnRecord?.length !== 0 && (
                <>
                  <hr />
                  <div className="addOns">
                    <h3>addon</h3>
                    {orderDetails.addOnRecord?.map(
                      ({ addOnPlanId, addOnPrice }, key) => {
                        return (
                          <div key={key} className="addOn">
                            <h2>{addOnPlanId}</h2>
                            <h2>{numberToCurrency(addOnPrice)}</h2>
                          </div>
                        );
                      }
                    )}
                  </div>
                </>
              )}
              {discountPrice > 0 && (
                <>
                  <hr />
                  <div className="discount">
                    <div>
                      <h2>discount</h2>
                    </div>
                    <div>
                      <h2>{numberToCurrency(discountPrice)}</h2>
                    </div>
                  </div>
                </>
              )}
              <hr />
              <div className="total">
                <div>
                  <h2>total</h2>
                </div>
                <div>
                  <h2>
                    {numberToCurrency(
                      orderDetails.price + allAddOnPrice - discountPrice
                    )}
                  </h2>
                </div>
              </div>
              <hr />
              <div className="states">
                <div>
                  <h2>states</h2>
                </div>
                <div>
                  <h2 className={orderStates.state}>{orderStates.state}</h2>
                </div>
              </div>
            </div>
          );
        }
      )}
    </main>
  );
};

export default OrdersLIst;
