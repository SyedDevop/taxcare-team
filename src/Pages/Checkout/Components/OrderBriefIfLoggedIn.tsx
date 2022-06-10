import { OrderSummary } from "../../../Type/Checkout";
import OrderDetails from "./OrderDetails";

interface OrderBriefIfLoggedInProp {
  orderData: OrderSummary;
  name: string | null;
}
const OrderBriefIfLoggedIn = ({
  name,
  orderData,
}: OrderBriefIfLoggedInProp) => {
  return (
    <div className="checkoutBrief">
      <div className="welcomeNote">
        <h1>{"Welcome back...... :)"}</h1>
        <h2>{name ? name : "dear customer"}</h2>
      </div>
      <hr />
      <OrderDetails {...orderData} />
      <hr />
      <p>Thank you for choosing your services...!!!</p>
    </div>
  );
};

export default OrderBriefIfLoggedIn;
