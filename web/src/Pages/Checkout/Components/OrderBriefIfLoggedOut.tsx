import { Link } from "react-router-dom";

interface OrderBriefIfLoggedOutProps {
  children: React.ReactNode;
}

const OrderBriefIfLoggedOut: React.FC<OrderBriefIfLoggedOutProps> = ({
  children,
}) => {
  return (
    <div className="checkoutBrief">
      <div className="head">
        <h1>{"Hello there nice seeing you... :)"}</h1>
      </div>
      <hr />
      <div className="userQuery">
        <p>
          If you are Returning customer?: <Link to="/login">LOG IN</Link>
        </p>
        <p className="welcomeNote">
          IF you are New customer. Welcome to Taxcare Accounting Solutions.Place
          fill the form below to place your order.Thank you for choosing your
          services...!!!
        </p>
        {children}
        <p className="note">
          *after placing the order, our executive will send get in touch for
          payments and documents related details.
        </p>
      </div>
    </div>
  );
};

export default OrderBriefIfLoggedOut;
