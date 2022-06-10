import { useState } from "react";
export const useLoginFormState = () => {
  const [loginFormState, setLoginFormState] = useState(false);
  function updateLoginForm() {
    setLoginFormState((preState) => !preState);
  }

  return { loginFormState, updateLoginForm, setLoginFormState };
};
