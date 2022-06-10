import { ReactNode } from "react";

interface buttonProps {
  btnDisabled: boolean;
  onclick: () => void;
  children?: ReactNode;
}
const PlaceOrderBtn = ({ btnDisabled, onclick, children }: buttonProps) => {
  return (
    <button
      type="button"
      className="placeOrderBtn"
      disabled={btnDisabled}
      onClick={onclick}
    >
      {children ? children : "button"}
    </button>
  );
};
PlaceOrderBtn.defaultProps = {
  btnDisabled: false,
};

export default PlaceOrderBtn;
