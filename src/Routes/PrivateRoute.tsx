import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

import { useAuth } from "../Hooks";

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      render={() =>
        user ? children : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
