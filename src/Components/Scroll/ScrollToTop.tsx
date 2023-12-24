import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { animateScroll as Scroll } from "react-scroll";
import ChevronRightIcon from "../../Asset/svg/icons/right.svg?react";
import "./Scroll.scss";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    Scroll.scrollToTop({ duration: 1500 });
  }, [pathname]);

  return null;
}

export const ScrollBox = () => {
  return (
    <div id="scrollBox" onClick={() => Scroll.scrollToTop()}>
      <ChevronRightIcon />
    </div>
  );
};
