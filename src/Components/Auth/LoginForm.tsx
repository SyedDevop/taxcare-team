import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CloseIcon from "@material-ui/icons/Close";

import { useAuth } from "../../Hooks";
import { ErrorPopUp } from "../PopUp/PopUp";
import FullscreenImage from "../FullSreenImage/FullscreenImage";
import Loader from "../Loader/Loader";
// import Backdrop from "../../Asset/svg/backDrop.svg";

import "./LoginForm.scss";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(15).required(),
  firebase: yup.string(),
});

const LoginForm = () => {
  const [loader, setLoader] = React.useState(false);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { signInUser } = useAuth();

  const onSubmit = handleSubmit((data) => {
    login({ email: data.email, password: data.password });
    setLoader(true);
  });
  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      await signInUser(email, password);
      history.push("/");
    } catch (error: any) {
      setError("firebase", {
        type: "manual",
        message: error.message,
      });
      console.error(error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <FullscreenImage id="login">
      <div className="loginForm">
        <form onSubmit={onSubmit}>
          <span id="close" onClick={() => history.goBack()}>
            <CloseIcon />
          </span>
          <h1>Login</h1>
          <label htmlFor="email">Email*</label>
          {errors.email && <ErrorPopUp>{errors.email?.message}</ErrorPopUp>}
          <input {...register("email")} type="email" placeholder="Email...." />

          <label htmlFor="password">Password*</label>

          {errors.password && (
            <ErrorPopUp>{errors.password?.message}</ErrorPopUp>
          )}

          <input
            {...register("password")}
            type="password"
            placeholder="Min. 8character"
            minLength={8}
          />

          <Link to="/forget-password" rel="noopener noreferrer">
            Forget password?
          </Link>

          {errors.firebase && (
            <ErrorPopUp>
              {errors.firebase && "Email or Password are invalid"}
            </ErrorPopUp>
          )}

          <button type="submit" className={!loader ? "" : "loadState"}>
            {!loader ? "Login" : <Loader />}
          </button>
        </form>
      </div>
    </FullscreenImage>
  );
};

export { LoginForm };
