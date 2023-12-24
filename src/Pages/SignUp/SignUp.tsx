import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateProfile } from "firebase/auth";

import { useFetchSignUp } from "../../Api";
import { useAuth } from "../../Hooks";
import Backdrop from "../../Components/Backdrop/Backdrop";
import Loader from "../../Components/Loader/Loader";
import FullscreenImage from "../../Components/FullSreenImage/FullscreenImage";

import "./SignUp.scss";
import { ErrorPopUp } from "../../Components/PopUp";

type SignUpInput = {
  name: string;
  email: string;
  password: string;
  conPass?: string;
};

const SignUp = () => {
  const [loader, setLoader] = useState(false);
  const { data, isFetching } = useFetchSignUp();
  const { createUser, emailVerification } = useAuth();
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().min(3, "name must be 3 character").required(),
    email: yup.string().email("e-mail is not valid!").required(),
    password: yup
      .string()
      .min(8, "password has to be longer than 8 characters!")
      .required("password is required"),
    conPass: yup.string().oneOf([yup.ref("password")], "passwords must match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<SignUpInput>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (data) {
      setValue("email", data.email);
      setValue("name", data.name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoader((pre) => !pre);
      const user = await createUser(data.email, data.password);
      await updateProfile(user.user, { displayName: data.name });
      await emailVerification(user.user);
      console.log("email.sent");
    } catch (e) {
      console.log(e);
    } finally {
      setLoader((pre) => !pre);
    }
  });

  return (
    <section id="signUp">
      <Backdrop open={isFetching}>
        <div>
          <Loader
            loaderHeight="150px"
            loaderWidth="150px"
            color="primaryBlue"
          />
        </div>
      </Backdrop>
      <FullscreenImage id="signUp__form">
        <form onSubmit={onSubmit}>
          <h1>sign up !._.!</h1>

          <label htmlFor="name">Name*</label>
          {errors.name?.message && (
            <ErrorPopUp>{errors.name.message}</ErrorPopUp>
          )}
          <input
            {...register("name", {
              required: true,
              minLength: 3,
            })}
            type="text"
            id="name"
            placeholder="Name...."
            disabled
          />
          <label htmlFor="email">Email*</label>
          {errors.email?.message && (
            <ErrorPopUp>{errors.email.message}</ErrorPopUp>
          )}
          <input
            {...register("email", { required: true })}
            type="email"
            id="email"
            placeholder="Email...."
            disabled
          />

          <label htmlFor="password">Password*</label>
          {errors.password?.message && (
            <ErrorPopUp>{errors.password.message}</ErrorPopUp>
          )}
          <input
            {...register("password")}
            type="password"
            id="password"
            placeholder="Min. 8character"
            minLength={8}
          />

          <label htmlFor="conPass">Conform Password*</label>
          {errors.conPass?.message && (
            <ErrorPopUp>{errors.conPass.message}</ErrorPopUp>
          )}
          <input
            {...register("conPass")}
            type="password"
            id="conPass"
            placeholder="Min. 8character"
            minLength={8}
          />

          <button type="submit">{!loader ? "sign up" : <Loader />}</button>
        </form>
      </FullscreenImage>
    </section>
  );
};

export default SignUp;
