import ErrorIcon from "@material-ui/icons/Error";

import "./PopUp.scss";

interface Props {
  children: string;
}

const ErrorPopUp = (props: Props) => {
  return (
    <span id="error-popup">
      <ErrorIcon /> {props.children}
    </span>
  );
};

export { ErrorPopUp };
