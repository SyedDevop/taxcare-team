import React from "react";

import Backdrop from "@svg/backDrop.svg?url";

interface Props {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

const FullscreenImage: React.FC<Props> = (props) => {
  const fullsreenImageStyle = {
    width: "100vw",
    height: "100dvh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${Backdrop})`,
  };
  return (
    <section
      id={props.id}
      className={props.className}
      style={fullsreenImageStyle}
    >
      {props.children}
    </section>
  );
};

export default FullscreenImage;
