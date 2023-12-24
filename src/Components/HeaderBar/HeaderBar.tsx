import { Link } from "react-router-dom";
import "./HeaderBar.scss";
import { Link as ScrollLink } from "react-scroll";

import PhoneIcon from "../../Asset/svg/icons/phone.svg?react";
import TwitterIcon from "../../Asset/svg/icons/twitter.svg?react";
import FacebookIcon from "../../Asset/svg/icons/fb.svg?react";
import InstagramIcon from "../../Asset/svg/icons/instagram.svg?react";
import EmailIcon from "../../Asset/svg/icons/contact_mail.svg?react";

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
