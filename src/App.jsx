import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchCurrencies } from "./features/currency/currenciesSlice";
import { setFrom, setTo } from "./features/currency/currencySlice";

import InputAmount from "./components/InputAmount";
import CurrencySelect from "./components/CurrencySelect";
import ConvertButton from "./components/ConvertButton";
import Result from "./components/Result";
import HistoryList from "./components/HistoryList";

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
    <>
      <InputAmount />

      <CurrencySelect
        value={from}
        onChange={(e) => dispatch(setFrom(e.target.value))}
      />
      <CurrencySelect
        value={to}
        onChange={(e) => dispatch(setTo(e.target.value))}
      />

      <ConvertButton />
      <Result />
      <HistoryList />
    </>
  );
}
