import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchCurrencies } from "./features/currency/currenciesSlice";
import { setFrom, setTo } from "./features/currency/currencySlice";

import InputAmount from "./components/InputAmount/InputAmount";
import CurrencySelect from "./components/CurrencySelect";
import ConvertButton from "./components/ConvertButton";
import Result from "./components/Result";
import HistoryList from "./components/HistoryList";
import ThemeButton from "./components/ThemeButton";

export default function App() {
  const dispatch = useDispatch();
  const { from, to } = useSelector((state) => state.currency);
  const currenciesState = useSelector((state) => state.currencies);

  useEffect(() => {
    if (currenciesState.status === "idle") {
      dispatch(fetchCurrencies());
    }
  }, [currenciesState.status, dispatch]);

  return (
    <div
      className="flex gap-1 bg-(--bg-main) 
         p-6 flex-col rounded-4xl max-w-md mx-auto shadow-2xl"
    >
      <div className="flex flex-row justify-between align-top">
        <h2 className="text-xl text-(--text-main) font-bold mb-6">
          Конвертер валют
        </h2>
        <ThemeButton />
      </div>

      <InputAmount />

      <div className="flex flex-col gap-0">
        <div className="flex flex-col input-text">
          <h3 className="font-light mb-1">Из</h3>
          <CurrencySelect
            value={from}
            onChange={(e) => dispatch(setFrom(e.target.value))}
          />
        </div>
        <div className="flex flex-col input-text">
          <h3 className="font-light mb-1">В</h3>
          <CurrencySelect
            value={to}
            onChange={(e) => dispatch(setTo(e.target.value))}
          />
        </div>
      </div>

      <ConvertButton />
      <Result />
      <HistoryList />
    </div>
  );
}
