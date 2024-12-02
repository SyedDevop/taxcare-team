import AddIcon from "@icons/add.svg?react";
import RemoveIcon from "@icons/remove.svg?react";

import { AddonPlusProps } from "../../../Type";

const AddonPlus = ({ addOns, addOnSet, addOnSetData }: AddonPlusProps) => {
  return (
    <>
      {addOns.map(({ addOnPlanId, addOnPrice, perks }, index) => {
        return (
          <div className="addons" key={index}>
            <h3>{perks}</h3>
            <div className="addons-price">
              <button
                type="button"
                onClick={() => {
                  addOnSet({ addOnPlanId, addOnPrice });
                }}
              >
                {addOnSetData.some(
                  (object) => object.addOnPlanId === addOnPlanId,
                ) ? (
                  <RemoveIcon />
                ) : (
                  <AddIcon />
                )}
              </button>
              <strong>Rs {addOnPrice}/-</strong>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AddonPlus;
