import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

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
                  (object) => object.addOnPlanId === addOnPlanId
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
