import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import { Link } from "react-router-dom";
import "./HeaderBar.scss";
import { Link as ScrollLink } from "react-scroll";

const HeaderBar = () => {
  return (
    <header className="headerBar">
      <div className="container">
        <div>
          <a href="tel:+917204846154">
            <PhoneIcon /> +91 720-484-6154
          </a>
          <a href="mailto:admin@taxcareteam.com">
            <EmailIcon />
            admin@taxcareteam.com
          </a>
          <span>|</span>
          <a href="http://www.facebook.com/">
            <FacebookIcon />
          </a>
          <a href="http://#.com">
            <InstagramIcon />
          </a>
          <a href="#.com">
            <TwitterIcon />
          </a>
        </div>
        <div className="pageLink">
          <Link to="/">Home</Link>
          <a href="#.com">About Us</a>
          <ScrollLink to="info" smooth={true} duration={1000}>
            Contact
          </ScrollLink>
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
