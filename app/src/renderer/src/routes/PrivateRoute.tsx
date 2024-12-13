import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router";

import { useAuth } from "@/hooks/useAuth";

const PrivateRoute = () => {
  const { isAuthenticating } = useAuth();
  let navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticating) {
      navigate("/login");
    }
  }, []);
  return <Outlet />;
};

export default PrivateRoute;
