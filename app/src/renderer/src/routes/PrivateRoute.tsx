import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router";
import { useAuth } from "@/hooks/useAuth";
import logo from "../../asset/loder.svg";

const PrivateRoute = () => {
  const { user, isAuthenticating } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticating && !user) {
      navigate("/login", { replace: true });
    }
  }, [user, isAuthenticating, navigate]);

  // Show a loading indicator while authentication is in progress
  if (isAuthenticating) {
    return (
      <div
        className="bg-foreground h-screen bg-center bg-no-repeat bg-cover grid place-items-center"
        style={{ backgroundImage: `url(${logo})`, color: "white" }}
      >
        Loading from Auth...
      </div>
    );
  }
  return <Outlet />;
};

export default PrivateRoute;
