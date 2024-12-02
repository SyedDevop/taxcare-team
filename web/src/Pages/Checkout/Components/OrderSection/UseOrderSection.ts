import { useState } from "react";
import { SubmitHandler, UseFormReturn } from "react-hook-form";

import {
  OrderSummary,
  FormInput,
  ExistingUserOrder,
  NewUserOrder,
} from "../../../../Type";
import { useAuth, useFirebaseFunction, useDb } from "../../../../Hooks";
import { orderIdGenerator } from "../../../../Utils";

export interface UseOrderSectionProps extends OrderSummary {
  method: UseFormReturn<FormInput>;
  pop: React.Dispatch<React.SetStateAction<boolean>>;
  orderExistPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useOrderSection = ({
  method,
  planId,
  planType,
  price,
  addOnRecord,
  pop,
  orderExistPopUp,
}: UseOrderSectionProps) => {
  const [discountAmount, setDiscountAmount] = useState(0);
  const [placeOrderState, setPlaceOrderState] = useState(false);
  const { user } = useAuth();
  const { addOrder, orderExist } = useDb();

  const allAddOnPrice =
    addOnRecord?.reduce((total, recode) => total + recode.addOnPrice, 0) || 0;
  // FIXME(1): Merge ExistingUserOrder and NewUserOrder functions and types. 
  // FIXME(2): Delete the Payment method in user dashboard
  // -------------------------------------------------------------------------------
  // * HANDLE FORM SUBMIT *
  // -------------------------------------------------------------------------------
  /**
   * @type {Function} - This function first checks is the user is logged in or not.
   * then runs the two functions accordingly. @existingUserOrder @newUserOrder
   * */
  const handleFormSubmit = async () => {
    setPlaceOrderState((pre) => !pre);
    /**
     * @type {Function} - This function execute is the user is logged in.
     * first it checks if the if addOnRecord is not undefined || [],
     * the create a payLoad fo order details,user uid,and state of the order.
     * */
    const existingUserOrder = async () => {
      const addOns = addOnRecord || [];
      const userId = user?.uid || "user uid undefined";
      const placeOrderDetails: ExistingUserOrder = {
        orderId: orderIdGenerator(),
        userId: userId,
        orderDetails: { ...{ planId, planType, price, addOnRecord: addOns } },
        discountPrice: discountAmount,
        orderStates: {
          state: "conformation",
        },
        clientType: "existing",
        totalAmount: price + allAddOnPrice - discountAmount,
        tag: `${planId}-${planType}`,
        totalAddOnAmount: allAddOnPrice,
      };
      try {
        const exists = await orderExist(placeOrderDetails.tag, userId);
        console.log(exists);
        if (exists) {
          orderExistPopUp(exists);
        } else {
          await addOrder(placeOrderDetails);
          pop((pre) => !pre);
        }
        window.localStorage.removeItem("orderData");
      } catch (err) {
        console.error(err + "Got the ett");
      } finally {
        setPlaceOrderState((pre) => !pre);
      }
    };
    // ------------------------------------------------------------------------------/
    /**
     * @type {Function} - This function execute if the user is not logged in.
     * first it checks if the if addOnRecord is not undefined || [],
     * second it checks if it got the user details
     * then create a payLoad fo order details,user uid,and state of the order.
     * */
    const newUserOrder = async () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      let formData = {} as FormInput;
      const submitNewClint: SubmitHandler<FormInput> = async (
        data: FormInput
      ) => {
        formData = data;
        return data;
      };

      await method.handleSubmit(submitNewClint)();

      const placeOrderDetails = (): NewUserOrder => {
        const addOns = addOnRecord || [];
        return {
          orderId: orderIdGenerator(),
          clientData: {} as FormInput,
          orderDetails: { ...{ planId, planType, price, addOnRecord: addOns } },
          discountPrice: discountAmount,
          orderStates: {
            state: "conformation",
          },
          clientType: "new",
          totalAmount: price + allAddOnPrice - discountAmount,
          totalAddOnAmount: allAddOnPrice,
        };
      };
      if (Object.keys(formData).length !== 0) {
        try {
          const placeOrderData: NewUserOrder = {
            ...placeOrderDetails(),
            clientData: formData,
          };
          await addOrder(placeOrderData);
          pop((pre) => !pre);
          window.localStorage.removeItem("orderData");
        } catch (err) {
          console.error(err + "ERROR LOG");
        } finally {
          setPlaceOrderState((pre) => !pre);
        }
      } else {
        setPlaceOrderState((pre) => !pre);
      }
    };
    // Calling the function based on user is logged in or its a new user.
    user ? existingUserOrder() : newUserOrder();
  };
  // -------------------------------------------------------------------------------
  const { checkDiscount } = useFirebaseFunction();

  const handleDiscount = async (discountCode: string) => {
    interface DiscountAPIData {
      exists: boolean;
      gotData: { disCode: string; price: number }[];
    }
    const discountData = await checkDiscount({ code: discountCode });
    const { exists, gotData }: DiscountAPIData = JSON.parse(
      discountData.data as string
    );
    setDiscountAmount(gotData.length > 0 ? gotData[0].price : 0);
    return exists;
  };
  // -------------------------------------------------------------------------------
  return {
    handleDiscount,
    discountAmount,
    placeOrderState,
    allAddOnPrice,
    handleFormSubmit,
  };
};
