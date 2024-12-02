import { ReactNode } from "react";
import "./WhatIs.scss";

interface WhatIsProps {
  whatIsData: {
    title: string;
    mainParagraph: string;
    sebParagraph?: string[];
  }[];
  contentBlock?: ReactNode;
}
export const WhatIsSection = (props: WhatIsProps) => {
  const [{ title, mainParagraph, sebParagraph }] = props.whatIsData;

  return (
    <section id="whatIs">
      <div className="container">
        <h2>WHAT IS </h2>
        <h1>{title}</h1>
        <div className="explanation">
          <p className="sidebar">{mainParagraph}</p>
          {sebParagraph?.map((lines, index) => {
            return <p key={index}>{lines}</p>;
          })}
          {props.contentBlock}
        </div>
      </div>
    </section>
  );
};
