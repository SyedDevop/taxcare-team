import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

import { useAuth } from "../Hooks";

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      //@ts-ignore
      render={({ location }) =>
        user === null ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
