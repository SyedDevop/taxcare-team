import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Backdrop from "../../FullSreenImage/FullscreenImage";
import { ErrorPopUp, Modal } from "../../PopUp";
import { useAuth } from "../../../Hooks";

import "./ForgetPassword.scss";
import { AuthError } from "firebase/auth";
import Loader from "../../Loader/Loader";
// interface Props {}

// type FormData = {
//   email: string;
//   firebase: string;
// };
const schema = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    firebase: yup.string(),
  })
  .required();
type SchemaType = yup.InferType<typeof schema>;

const ForgetPassword = () => {
  const [messageBox, setMessageBox] = useState(false);
  const [loader, setLoader] = useState(false);
  const { userPasswordResetEmail } = useAuth();
  const [emailRef, setEmailRef] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async ({ email }: SchemaType) => {
    try {
      setLoader((pre) => !pre);
      await userPasswordResetEmail(email);
      setMessageBox((pre) => !pre);
      setEmailRef(email);
    } catch (err) {
      console.log(err);
      const isAuthError = (x: any): x is AuthError => {
        return x.name === "FirebaseError";
      };
      if (isAuthError(err)) {
        switch (err.code) {
          case "auth/user-not-found":
            console.error("No User found?");
            setError("firebase", {
              type: "manual",
              message: "No User found??",
            });
            break;
        }
      }
    } finally {
      setLoader((pre) => !pre);
    }
  });
  return (
    <Backdrop id="forgetPassword">
      <form onSubmit={onSubmit}>
        <h1>Forget password?</h1>
        <p>
          Please enter your registered email address. We’ll send instructions to
          help reset your password.
        </p>
        <label htmlFor="email-input">Email*</label>
        {errors.email && <ErrorPopUp>{`${errors.email?.message}`}</ErrorPopUp>}
        {errors.firebase && (
          <ErrorPopUp>{`${errors.firebase?.message}`}</ErrorPopUp>
        )}
        <input
          {...register("email")}
          type="email"
          id="email-input"
          placeholder="mail@website.com"
        />
        <button type="submit" className={!loader ? "" : "loading"}>
          {!loader ? "send reset instructions" : <Loader />}
        </button>
      </form>

      <Modal
        modalState={messageBox}
        setModalState={setMessageBox}
        buttonText="Back to login"
        customPath="login"
      >
        <h1>Email instructions sent</h1>
        <p>Please follow the instructions we sent to your inbox</p>
        <span>{emailRef}</span>
      </Modal>
    </Backdrop>
  );
};

export { ForgetPassword };
