import { SVGProps } from "react";
interface Props {
  svg: SVGProps<SVGAElement>;
  heading: string;
  paragraph: string;
}

const ReasonCard = (props: Props) => {
  return (
    <div className="reasonCards">
      <div>
        {props.svg}
        <h4>{props.heading}</h4>
        <p>{props.paragraph}</p>
      </div>
    </div>
  );
};

export default ReasonCard;
