import { useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./Hero.scss";
import "./Animate.scss";
import background from "../../Asset/img/banner.webp";
import HeroContent from "./HeroContent";
import TagLine from "../TagLine/TagLine";

const Hero = () => {
  const [displayState, setDisplayState] = useState<boolean>(true);
  const updateUi = () => {
    setDisplayState((state) => !state);
  };
  return (
    <>
      <section id="hero" style={{ backgroundImage: `url(${background})` }}>
        <div className="container">
          <SwitchTransition mode={"out-in"}>
            <CSSTransition
              key={displayState.toString()}
              addEndListener={(node, done) => {
                node.addEventListener("transitionend", done, false);
              }}
              classNames="fade"
            >
              <div className="animateContainer">
                {displayState ? (
                  <div className="animate">
                    <HeroContent
                      callBackFunction={updateUi}
                      state={displayState}
                      animateTextList={["Only At Rs 499/-"]}
                      headerText="Get GST Registration Now"
                      buttonText="Enquire"
                      markTag="With One Month filing Free."
                      tagLine="Get all your Compliances done at one place."
                    />
                  </div>
                ) : (
                  <div className="animate">
                    <HeroContent
                      callBackFunction={updateUi}
                      state={!displayState}
                      animateTextList={[
                        "Pvt Ltd at Rs 5999/-",
                        "LLP at Rs 4499/-",
                        "OPC at Rs 5499/-",
                      ]}
                      headerText="Register Your Business In"
                      buttonText="Enquire"
                      tagLine="Get all your Compliances done at one place."
                    />
                  </div>
                )}
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </section>
      <TagLine />
    </>
  );
};

export default Hero;
