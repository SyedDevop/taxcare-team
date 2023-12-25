import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { animateScroll as Scroll } from "react-scroll";

import AccountCircleIcon from "@icons/account.svg?react";
import ExpandMoreIcon from "@icons/expand_more.svg?react";
import MenuIcon from "@icons/menu.svg?react";
import CloseIcon from "@icons/close.svg?react";
import { useAuth } from "@/Hooks";

import Logo from "../../assets/img/LOGO.svg?react";
import { useButtonState } from "./ButtonState";
import { NavLinkData } from "./NavLinkData";

import "./Nav.scss";
interface Props {
  dropDownItems?: { title: string; path: string }[];
}

const NavBar = () => {
  const { mobileNav, updateMobileNav } = useButtonState();
  const { user, signOutUser } = useAuth();

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
