import { FC, ReactNode } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import { animateScroll as Scroll } from "react-scroll";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Logo from "../../Asset/img/LOGO.svg?react";
import { useButtonState } from "./ButtonState";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { NavLinkData } from "./NavLinkData";
import { useAuth } from "../../Hooks";

import "./Nav.scss";
interface Props {
  dropDownItems?: { title: string; path: string }[];
}

const NavBar = () => {
  const { mobileNav, updateMobileNav } = useButtonState();
  const { user, signOutUser } = useAuth();
  // const onSubmit = async () => {
  //   try {
  //     await createUser("syedyzairahmed70@gmail.com", "windows8");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <nav id="nav">
      <div className="container navBar">
        <div
          className="logo"
          onClick={() => {
            Scroll.scrollToTop();
          }}
        >
          <Link to="/" aria-label="Taxcare accounting solutions logo">
            <Logo />
          </Link>
        </div>
        <div className="navLinks" id={mobileNav ? "hidden" : ""}>
          <NavLinks
            className={mobileNav ? "mobileNav mobileStyle" : "mobileNav"}
          >
            <li id="account">
              <div className="account__logo">
                <AccountCircleIcon />
                <a href="/#" aria-label="login logo">
                  <h5>{!user ? "Log In" : "Logged In"}</h5>
                </a>
              </div>

              <ul className="dropDownItem">
                <li>
                  <Link to="/checkout">Checkout</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  {!user ? (
                    <Link to="/login"> log in</Link>
                  ) : (
                    <p onClick={() => signOutUser()}>log out</p>
                  )}
                </li>
              </ul>
            </li>
          </NavLinks>
        </div>
        <button className="menuBtn" type="button" onClick={updateMobileNav}>
          {mobileNav ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </nav>
  );
};

const DropDown: FC<Props> = ({ dropDownItems }) => {
  return (
    <ul className="dropDownItem">
      {dropDownItems &&
        dropDownItems.map((item, key) => {
          return (
            <li key={key}>
              <Link to={`${item.path}`}>{item.title}</Link>
            </li>
          );
        })}
    </ul>
  );
};

interface NavLinksProps {
  className: string;
  children?: ReactNode;
}
const NavLinks = ({ className, children }: NavLinksProps) => {
  return (
    <ul className={className}>
      {NavLinkData.map(({ navTitle, subNav, path }, key) => {
        return (
          <li key={key}>
            {subNav === undefined ? (
              <Link to={path === undefined ? "" : path}>{navTitle}</Link>
            ) : (
              <>
                {navTitle} <ExpandMoreIcon />
                <DropDown dropDownItems={subNav} />
              </>
            )}
          </li>
        );
      })}
      {children}
    </ul>
  );
};

export default NavBar;
