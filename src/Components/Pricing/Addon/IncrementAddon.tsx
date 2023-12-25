import AddIcon from "@icons/add.svg?react";
import RemoveIcon from "@icons/remove.svg?react";
import { useHistory } from "react-router-dom";

import useHandleIncrement from "./useHandelIncrement";
import Button from "../PricingButton";

import { AddonData } from "../../../Type";
import { useLocalStorage } from "../../../Hooks";

export interface IncrementAddonData {
  addOnPlanId: string;
  addOnPrice: number;
  IncrementAddon: number;
}
interface IncrementAddonProps extends AddonData {
  perks: string;
  subTitle?: string;
  setIncrement: React.Dispatch<React.SetStateAction<IncrementAddonData>>;
  increment: IncrementAddonData;
  submit?: boolean;
}

const IncrementAddon = ({
  addOnPlanId,
  addOnPrice,
  subTitle,
  perks,
  increment,
  setIncrement,
  submit,
}: IncrementAddonProps) => {
  const { handleIncrementSet } = useHandleIncrement({
    setIncrement,
    addOnPrice,
    addOnPlanId,
  });
  const history = useHistory();
  const [, setOrders] = useLocalStorage("orderData");
  const handleClicks = async () => {
    await setOrders({
      price: increment.addOnPrice,
      planId: increment.addOnPlanId,
      planType: perks,
    });
    history.push(`/checkout`);
  };

  return (
    <div className="increment-addons">
      <h3>{perks}</h3>
      <h4>{subTitle}</h4>
      <div className="addons-price">
        <strong>Rs {addOnPrice * increment.IncrementAddon}/-</strong>
      </div>
      <div className="increment-section">
        <button
          type="button"
          onClick={() => {
            handleIncrementSet("button", "add");
          }}
        >
          <AddIcon />
        </button>
        <input
          type="number"
          name="employee"
          value={increment.IncrementAddon}
          onChange={(e) => {
            handleIncrementSet("input", Number(e.target.value));
          }}
        />
        <button
          type="button"
          onClick={() => {
            handleIncrementSet("button", "remove");
          }}
        >
          <RemoveIcon />
        </button>
      </div>

      {submit && <Button onClick={handleClicks} />}
    </div>
  );
};

export default IncrementAddon;
