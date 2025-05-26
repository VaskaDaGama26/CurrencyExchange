import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchConversion } from "../features/currency/currencySlice";
import { addToHistory } from "../features/history/historySlice";

const ConvertButton = () => {

  const dispatch = useDispatch();
  const { amount, from, to } = useSelector((state) => state.currency);
  const currenciesState = useSelector((state) => state.currencies);

  const handleConvert = async () => {
    const res = await dispatch(fetchConversion({ from, to, amount }));
    if (res.meta.requestStatus === "fulfilled") {
      dispatch(
        addToHistory({
          from,
          to,
          amount,
          result: res.payload,
          date: new Date().toISOString(),
        })
      );
    }
  };

  return (
    <button
    className="border rounded-full w-fit px-4 py-1 mx-auto"
      onClick={handleConvert}
      disabled={currenciesState.status !== "succeeded"}
    >
      Конвертировать
    </button>
  );
};

export default ConvertButton;
