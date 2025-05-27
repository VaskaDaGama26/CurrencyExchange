import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAmount } from "../features/currency/currencySlice";

const InputAmount = () => {
  const dispatch = useDispatch();
  const { amount } = useSelector((state) => state.currency);

  return (
    <input
      className="border mb-2 text-sm ps-2"
      min={0}
      type="number"
      value={amount}
      onChange={(e) => dispatch(setAmount(Number(e.target.value)))}
    />
  );
};

export default InputAmount;
