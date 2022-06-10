import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AuthError } from "firebase/auth";

import { useAuth } from "../../../../Hooks/index";

import "./settings.scss";
import { ErrorPopUp, Modal } from "../../../../Components/PopUp";
import { useState } from "react";

type FormData = { newPass: string; rePass: string; firebase: string };

const schema = yup.object().shape({
  newPass: yup
    .string()
    .min(1, "Error")
    .max(15)
    .required("Password is required"),
  rePass: yup
    .string()
    .oneOf([yup.ref("newPass"), null], "Passwords must match"),
});

const Settings = () => {
  const [popUpBoxState, setPopUpBoxState] = useState(false);
  const { updateUserPassword } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async ({ rePass }) => {
    try {
      await updateUserPassword(rePass);
      setPopUpBoxState((pre) => !pre);
      reset();
    } catch (err) {
      const isAuthError = (x: any): x is AuthError => {
        return x.name === "FirebaseError";
      };
      if (isAuthError(err)) {
        switch (err.code) {
          case "auth/weak-password":
            console.error("Password is weak try a strong password");
            setError("firebase", {
              type: "manual",
              message: "Password is weak try a strong password",
            });
            break;
          case "auth/requires-recent-login":
            console.error("Login and try again.");
            setError("firebase", {
              type: "manual",
              message: "Login and try again.",
            });
            break;
        }
      }
    }
  });

  return (
    <section id="setting">
      <div className="resetPassword">
        <form onSubmit={onSubmit}>
          <h1>Password Reset</h1>
          <h3>Enter new password and then repeat it..</h3>

          <label htmlFor="newPassword">new password</label>
          {errors.newPass && (
            <ErrorPopUp>{`${errors.newPass?.message}`}</ErrorPopUp>
          )}
          <input
            {...register("newPass")}
            type="password"
            id="newPassword"
            required
            placeholder="Min. 8character"
            minLength={8}
          />
          <label htmlFor="repeatPassword">repeat password</label>
          {errors.rePass && (
            <ErrorPopUp>{`${errors.rePass?.message}`}</ErrorPopUp>
          )}
          {errors.firebase && (
            <ErrorPopUp>{`${errors.firebase?.message}`}</ErrorPopUp>
          )}
          <input
            {...register("rePass")}
            type="password"
            id="repeatPassword"
            required
            placeholder="Min. 8character"
            minLength={8}
          />
          <button type="submit">save</button>
        </form>
      </div>
      <Modal
        modalState={popUpBoxState}
        setModalState={setPopUpBoxState}
        buttonText="ok"
      >
        <h1>Successfully password reset !</h1>
        <p>You can now use your new password to log in to</p>
        <p>your account...</p>
      </Modal>
    </section>
  );
};

export default Settings;
