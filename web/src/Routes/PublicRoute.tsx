import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

import NavBar from "../Components/Header-nav/Nav";
import HeaderBar from "../Components/HeaderBar/HeaderBar";
import Footer from "../Components/Footer/Footer";
import Home from "../Pages/Home";
import StartBusiness from "../Pages/StartBusiness/StartBusiness";
import Info from "../Components/Info/Info";
import Registration from "../Pages/Registration/Registration";
import Compliances from "../Pages/Compliances/Compliances";
import ScrollToTop, { ScrollBox } from "../Components/Scroll/ScrollToTop";
import License from "../Pages/LicenseCertificate/License";
import Accounting from "../Pages/Accounting/Accounting";
import ProjectReport from "../Pages/ProjectReport/ProjectReport";
import PrivateRoute from "../Routes/PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Checkout from "../Pages/Checkout/Checkout";

import { CSSTransition, TransitionGroup } from "react-transition-group";

const PublicRoute = () => {
  const location = useLocation();


  return (
    <>
      <ScrollToTop />
      <HeaderBar />
      <NavBar />
      <TransitionGroup className="page-container">
        <CSSTransition classNames="fw page" timeout={1000} key={location.key}>
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route exact path="/startBusiness/*" component={StartBusiness} />
            <Route exact path="/registration/*" component={Registration} />
            <Route exact path="/compliances/*" component={Compliances} />
            <Route exact path="/license/*" component={License} />
            <Route exact path="/accounting" component={Accounting} />
            <Route exact path="/project-report" component={ProjectReport} />
            <PrivateRoute exact path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route exact path="/checkout" component={Checkout} />
            <Route path="/*" render={() => <Redirect to="/page-not-found" />} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Info />
      <Footer />
      <ScrollBox />
    </>
  );
};

export default PublicRoute;
