import { FC, useRef, useEffect } from "react";
import { PricingContainerProp } from "../../Type";

const PricingCardsContainer: FC<PricingContainerProp> = ({
  containerTitle,
  children,
}) => {
  const priceDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priceDiv.current) {
      if (priceDiv.current.scrollWidth > priceDiv.current.offsetWidth) {
        priceDiv.current.classList.remove("jc-center");
      } else {
        priceDiv.current.classList.add("jc-center");
      }
    }
  }, [priceDiv]);
  return (
    <div className="price-container">
      <div className="container__heading">
        <h3>{containerTitle}</h3>
      </div>
      <div
        className="container__body card-scroller snaps-inline"
        ref={priceDiv}
      >
        {children}
      </div>
    </div>
  );
};

export default PricingCardsContainer;
