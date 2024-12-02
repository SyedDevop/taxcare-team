import { FC } from "react";
import Typewriter from "typewriter-effect";
interface Props {
  callBackFunction: () => void;
  state?: boolean;
  animateTextList: string[];
  headerText: string;
  buttonText: string;
  tagLine?: string;
  tagLineBold?: string;
  markTag?: string;
}

const HeroContent: FC<Props> = (props) => {
  return (
    <div className="content">
      <h1>{props.headerText}</h1>
      {props.state && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter.callFunction(() => {
              props.callBackFunction();
            });
          }}
          options={{
            strings: props.animateTextList,
            autoStart: true,
            loop: false,
          }}
        />
      )}
      {props.markTag && <h3>{props.markTag}</h3>}
      {props.tagLine && (
        <p>
          <span>{props.tagLine}</span>
          {props.tagLineBold && (
            <strong>
              <br />
              {props.tagLineBold}
            </strong>
          )}
        </p>
      )}
      <button type="button">{props.buttonText}</button>
    </div>
  );
};

export default HeroContent;
