import React, { Dispatch } from "react";
import { IncrementAddonData } from "./IncrementAddon";

// interface Props extend IncrementAddonData  {
//   setIncrement: Dispatch<React.SetStateAction<IncrementAddonData>>;
// };

interface Props {
  setIncrement: Dispatch<React.SetStateAction<IncrementAddonData>>;
  addOnPlanId: string;
  addOnPrice: number;
}

export type Operation = "add" | "remove";
const useHandelIncrement = ({
  setIncrement,
  addOnPlanId,
  addOnPrice,
}: Props) => {
  function handleIncrementSet(valueFrom: "button", operation: Operation): void;
  function handleIncrementSet(valueFrom: "input", value: number): void;
  function handleIncrementSet(
    valueFrom: "button" | "input",
    arg?: Operation | number
  ): void {
    setIncrement((pre) => {
      // const PlanId = addOnPlanId + (pre.IncrementAddon + 1);
      let price: number, addonCount: number, planId: string;
      if (valueFrom === "button") {
        price = pre.addOnPrice + (arg === "add" ? addOnPrice : -addOnPrice);
        addonCount = pre.IncrementAddon + (arg === "add" ? 1 : -1);
        planId = addOnPlanId + addonCount;
        return {
          addOnPlanId: planId,
          addOnPrice: price,
          IncrementAddon: addonCount,
        };
      }
      return {
        addOnPlanId: addOnPlanId + Number(arg),
        addOnPrice: Number(addOnPrice) * Number(arg),
        IncrementAddon: Number(arg),
      };
    });
  }
  return { handleIncrementSet };
};

export default useHandelIncrement;
