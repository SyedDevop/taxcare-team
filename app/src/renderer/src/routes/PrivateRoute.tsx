import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router";

import { useAuth } from "@/hooks/useAuth";

const PrivateRoute = () => {
  const { user } = useAuth();
  let navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);
  return <Outlet />;
};

export default PrivateRoute;
