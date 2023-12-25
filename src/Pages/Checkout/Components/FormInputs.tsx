import { ErrorPopUp } from "@/Components/PopUp/PopUp";
import { useFormContext } from "react-hook-form";

const FormInputs = () => {
  const {
    formState: { errors },
    register,
  } = useFormContext();
  return (
    <>
      {errors.name && <ErrorPopUp>{`${errors.name?.message}`}</ErrorPopUp>}
      <input {...register("name")} type="text" placeholder="Name...." />

      {errors.email && <ErrorPopUp>{`${errors.email?.message}`}</ErrorPopUp>}
      <input {...register("email")} type="email" placeholder="Email...." />

      {errors.phoneNumber && (
        <ErrorPopUp>{`${errors.phoneNumber?.message}`}</ErrorPopUp>
      )}
      <input
        {...register("phoneNumber")}
        type="tel"
        placeholder="Phone number..."
        minLength={10}
        maxLength={10}
      />
    </>
  );
};

export default FormInputs;
