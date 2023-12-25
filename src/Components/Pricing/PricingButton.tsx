import { useState } from "react";
import AvTimerIcon from "../../assets/svg/icons/av_timer.svg?react";

import { Modal } from "../PopUp";
import { isDev } from "../../Utils";

type Props = {
  onClick: (value?: any) => void;
};

console.log(isDev());

const PricingButton = ({ onClick }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className="btn"
        onClick={() => {
          if (isDev()) {
            return onClick();
          }
          return setOpen((pre) => !pre);
        }}
      >
        SELECT
      </button>
      <Modal
        modalState={open}
        setModalState={setOpen}
        buttonText="Close"
        icon={<AvTimerIcon />}
      >
        <h1>Coming Soon</h1>
        <h3>Sorry for the inconvenience </h3>
        <h3>Our team is working on it</h3>
      </Modal>
    </>
  );
};

export default PricingButton;
