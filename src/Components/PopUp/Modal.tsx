import { ReactNode } from "react";
import { useHistory } from "react-router-dom";

import { useLockBodyScroll } from "../../Hooks";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as CheckCircle } from "../../Asset/svg/check-circle.svg";

import "./modal.scss";

interface ModalContentProps {
  icon: any;
  children?: ReactNode;
  buttonText: string;
  handleClicks?: () => void;
}

interface Props extends ModalContentProps {
  modalState: boolean;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
  redirectPath?: "home" | "goBack";
  customPath?: string;
}

const Modal = ({
  buttonText,
  icon,
  modalState,
  setModalState,
  children,
  redirectPath,
  customPath,
}: Props) => {
  const history = useHistory();

  const navigateTo = (path: string) => {
    const paths: Record<string, () => void> = {
      home: () => history.push("/"),
      goBack: () => history.goBack(),
    };
    return paths[path]();
  };
  const handelExit = () => {
    if (redirectPath) {
      navigateTo(redirectPath);
    } else if (customPath) {
      history.push(`/${customPath}`);
    }
  };

  const handleClicks = () => {
    setModalState((pre) => !pre);
  };
  return (
    <CSSTransition
      in={modalState}
      timeout={700}
      classNames="modal"
      unmountOnExit
      onExited={handelExit}
      mountOnEnter
    >
      <ModalContent {...{ icon, children, buttonText, handleClicks }} />
    </CSSTransition>
  );
};

const ModalContent = ({
  icon,
  children,
  buttonText,
  handleClicks,
}: ModalContentProps) => {
  useLockBodyScroll();
  return (
    <div className="modalBackground">
      <div className="modal">
        {icon}
        {children}
        <button type="button" onClick={handleClicks}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  icon: <CheckCircle />,
};

export { Modal };
