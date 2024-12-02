import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useButtonState = () => {
  const { pathname } = useLocation();
  const [mobileNav, setMobileNav] = useState(false);
  useEffect(() => {
    resetMobileNav();
  }, [pathname]);
  function resetMobileNav() {
    setMobileNav(false);
  }
  function updateMobileNav() {
    setMobileNav((preState) => !preState);
  }
  return { mobileNav, updateMobileNav , resetMobileNav};
};
