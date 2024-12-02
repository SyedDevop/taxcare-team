import "./Footer.scss";
import Logo from "../../assets/img/LOGO.svg?react";
import PhoneIcon from "@icons/phone.svg?react";
import TwitterIcon from "@icons/twitter.svg?react";
import FacebookIcon from "@icons/fb.svg?react";
import InstagramIcon from "@icons/instagram.svg?react";
import EmailIcon from "@icons/contact_mail.svg?react";
import LocationIcon from "@icons/location.svg?react";

const Footer = () => {
  return (
    <footer>
      <div className="footer container">
        <div className="logo">
          <Logo />
        </div>
        {/* Social Links */}
        <div className="socialLinks">
          <h3>Social Links</h3>
          <div>
            <a href="a.com">
              <FacebookIcon />
            </a>
            <a href="a.com">
              <InstagramIcon />
            </a>
            <a href="http://.com">
              <TwitterIcon />
            </a>
          </div>
        </div>
        {/* Contacts */}
        <div className="contact">
          <h3>Contacts</h3>
          {/* Telephone */}
          <div>
            <div className="links">
              <span>
                <PhoneIcon />
              </span>
              <div>
                <a href="tel:+917204846154">+91 720-484-6154</a>
              </div>
            </div>
            {/* Email */}
            <div>
              <EmailIcon />
              <a href="mailto:admin@taxcareteam.com">admin@taxcareteam.com</a>
            </div>
          </div>
        </div>
        {/* Address */}
        <div className="address">
          <h3>Address</h3>
          <div>
            <LocationIcon />
            <p>
              # 92 11th cross 2nd main Somashwara Nagar Jaynagar 1st Block
              Bangalore-11
            </p>
          </div>
        </div>
      </div>
      <div className="footerBar">
        <div className="container">
          <p>
            Copyright &#169; 2021 Taxcare Accounting Solutions. All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
