import React from "react";
import { CSSTransition } from "react-transition-group";

import "./Backdrop.scss";
type Props = {
  open: boolean;
  children?: React.ReactNode;
};

const Backdrop: React.FC<Props> = ({ open, children }) => {
  return (
    <CSSTransition
      in={open}
      timeout={300}
      classNames="backdrop"
      unmountOnExit
      appear
    >
      <div className="backdrop ">{children}</div>
    </CSSTransition>
  );
};

export default Backdrop;
