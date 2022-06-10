import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";

import { useAuth, useLocalStorage } from "../../Hooks";
import { OrderSummary, FormInput } from "../../Type";

import OrderBriefIfLoggedOut from "./Components/OrderBriefIfLoggedOut";
import OrderBriefIfLoggedIn from "./Components/OrderBriefIfLoggedIn";
import FormInputs from "./Components/FormInputs";
import OrderSection from "./Components/OrderSection/OrderSection";
import { Modal } from "../../Components/PopUp";

import "./Checkout.scss";
import { useState } from "react";

const schema: yup.SchemaOf<FormInput> = yup.object().shape({
  name: yup.string().min(2, "Need at least 2 characters.").required(),
  email: yup.string().email().required(),
  phoneNumber: yup
    .string()
    .matches(new RegExp("[0-9]{10}"), "Phone number is not valid")
    .required("This field is required"),
});

const Checkout = () => {
  const [orders] = useLocalStorage<OrderSummary>("orderData");
  const { user } = useAuth();
  const methods = useForm<FormInput>({
    resolver: yupResolver(schema),
  });
  const [thankYouPop, setThankYouPop] = useState(false);
  const [orderExistPopUp, setOrderExistPopUp] = useState(false);
  return (
    <section id="checkout">
      <main className="container">
        {orders ? (
          <div className="checkoutSummary">
            {user ? (
              <OrderBriefIfLoggedIn
                orderData={orders}
                name={user.displayName}
              />
            ) : (
              <OrderBriefIfLoggedOut>
                <FormProvider {...methods}>
                  <form>
                    <FormInputs />
                  </form>
                </FormProvider>
              </OrderBriefIfLoggedOut>
            )}
            <OrderSection
              {...orders}
              method={methods}
              pop={setThankYouPop}
              orderExistPopUp={setOrderExistPopUp}
            />
          </div>
        ) : (
          <div className="noOrders">
            <h1>There are no order in checkout!!!!!</h1>
          </div>
        )}
      </main>
      <Modal
        modalState={thankYouPop}
        setModalState={setThankYouPop}
        buttonText="back to home"
        redirectPath="home"
      >
        <h1>Thank You!</h1>
        <h3>Your order has been received</h3>
        <h3>We will be in touch and contact you soon!</h3>
      </Modal>
      <Modal
        modalState={orderExistPopUp}
        setModalState={setOrderExistPopUp}
        buttonText="go back"
        redirectPath="goBack"
      >
        <h1>Error!</h1>
        <h3>Your order already exists. </h3>
        <h3>Please select different plan. </h3>
      </Modal>
    </section>
  );
};

export default Checkout;
