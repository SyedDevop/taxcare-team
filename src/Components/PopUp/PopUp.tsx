import ErrorIcon from "../../Asset/svg/icons/error.svg?react";

import "./PopUp.scss";

interface Props {
  children?: React.ReactNode;
}

const ErrorPopUp = (props: Props) => {
  return (
    <span id="error-popup">
      <ErrorIcon /> {props.children}
    </span>
  );
};

export { ErrorPopUp };
