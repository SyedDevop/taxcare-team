import { useHistory, useLocation } from "react-router-dom";

import Error404svg from "@svg/404svg1.svg?react";

import "./ErrorPage.scss";
const ErrorPage = () => {
  const { push } = useHistory();
  const { state }: { state?: { errorCode?: string; errorMessage?: string } } =
    useLocation();

  return (
    <section id="errorPage">
      <Error404svg />
      <div>
        <h1>{state?.errorCode ? state.errorCode : "404"}</h1>
        <p>
          {state?.errorMessage
            ? state.errorMessage
            : "The page you are looking for cannot be found."}
        </p>
        <button type="button" onClick={() => push("/")}>
          Go Home
        </button>
      </div>
    </section>
  );
};

export default ErrorPage;
