import "./OutboundLink.scss";
import { Link as ScrollLink } from "react-scroll";

interface OutBoundLinkProp {
  message: string;
  link: string;
  linkMessage: string;
  inPage: boolean;
}
const OutBoundLink = ({
  link,
  linkMessage,
  message,
  inPage,
}: OutBoundLinkProp) => {
  return (
    <span className="outbound-link">
      {message}
      {inPage ? (
        <ScrollLink to={link} smooth={true} duration={1000}>
          {linkMessage}
        </ScrollLink>
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {linkMessage}
        </a>
      )}
    </span>
  );
};

OutBoundLink.defaultProps = {
  message: "For government fee structure",
  linkMessage: "Click me",
  inPage: false,
};

export default OutBoundLink;
