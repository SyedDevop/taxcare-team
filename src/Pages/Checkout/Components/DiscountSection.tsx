import React, { useState } from "react";

import { ErrorPopUp } from "../../../Components/PopUp/PopUp";
import Loader from "../../../Components/Loader/Loader";

interface DiscountSectionProps {
  submit: (discountCode: string) => Promise<boolean>;
  discountDisplayState: React.Dispatch<React.SetStateAction<boolean>>;
}

const DiscountSection = ({
  submit,
  discountDisplayState,
}: DiscountSectionProps) => {
  const [discountInput, setDiscountInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const submitInput = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading((pre) => !pre);
      const result = await submit(discountInput);
      discountDisplayState(result);
      setError(!result);
    } finally {
      setIsLoading((pre) => !pre);
    }
  };

  return (
    <div className="discountSection">
      <h2>Discount code</h2>
      <form onSubmit={submitInput}>
        <div className="discountInput">
          <input
            type="text"
            name="discount"
            placeholder="Discount code"
            value={discountInput}
            min={2}
            onChange={(e) => setDiscountInput(e.target.value)}
            required
          />
          <button type="submit">
            {isLoading ? (
              <Loader loaderHeight="40px" loaderWidth="40px" />
            ) : (
              "Apply"
            )}
          </button>
        </div>
      </form>
      {error && <ErrorPopUp>Invalid discount code</ErrorPopUp>}
    </div>
  );
};

export default DiscountSection;
