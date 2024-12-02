import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { animateScroll as Scroll } from "react-scroll";

import ExpandMoreIcon from "@icons/expand_more.svg?react";
import MenuIcon from "@icons/menu.svg?react";
import CloseIcon from "@icons/close.svg?react";

import Logo from "../../assets/img/LOGO.svg?react";
import { useButtonState } from "./ButtonState";
import { NavLinkData } from "./NavLinkData";

import "./Nav.scss";
interface Props {
  dropDownItems?: { title: string; path: string }[];
}

const NavBar = () => {
  const { mobileNav, updateMobileNav } = useButtonState();

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
            <li>
              <Link to="/checkout">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  widths={24}
                  height={24}
                  style={{
                    transform: "rotate(0deg)",
                  }}
                >
                  <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>
              </Link>
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
