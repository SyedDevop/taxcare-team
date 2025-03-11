import { useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import "./Hero.scss";
import "./Animate.scss";
import background from "../../assets/img/banner.webp";
import HeroContent from "./HeroContent";
import TagLine from "../TagLine/TagLine";

import { GSTstartAt } from "@data/GstData";
import { OPCstartAt } from "@data/OpcData";
import { LLPstartAt } from "@data/LlpData";
import { PLCstartAt } from "@data/PlcData";

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
                      animateTextList={[GSTstartAt, ""]}
                      headerText="Get GST Registration Now"
                      buttonText="Enquire"
                      tagLine="Get all your Compliances done at one place."
                    />
                  </div>
                ) : (
                  <div className="animate">
                    <HeroContent
                      callBackFunction={updateUi}
                      state={!displayState}
                      animateTextList={[PLCstartAt, LLPstartAt, OPCstartAt, ""]}
                      headerText="Register Your Business in India"
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
