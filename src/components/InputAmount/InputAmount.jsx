import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAmount } from "../../features/currency/currencySlice";
import "./InputAmount.css";

const InputAmount = () => {
  const dispatch = useDispatch();
  const { amount } = useSelector((state) => state.currency);

  return (
    <input
      className="border mb-1 ps-2 text-(--text-main)"
      min={1}
      type="number"
      value={amount}
      onChange={(e) => dispatch(setAmount(Number(e.target.value)))}
    />
  );
};

export default InputAmount;
