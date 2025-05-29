import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchCurrencies } from "./features/currency/currenciesSlice";
import { setFrom, setTo } from "./features/currency/currencySlice";

import InputAmount from "./components/InputAmount/InputAmount";
import CurrencySelect from "./components/CurrencySelect";
import ConvertButton from "./components/ConvertButton";
import Result from "./components/Result";
import HistoryList from "./components/HistoryList";
import LanguageButton from "./components/iconsComponents/LanguageButton";
import ThemeButton from "./components/iconsComponents/ThemeButton";

import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();
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
      <div className="flex flex-row justify-between align-top gap-2">
        <h2 className="text-xl text-(--text-main) font-bold mb-6">
          {t("heading")}
        </h2>
        <div className="flex flex-row gap-4">
          <LanguageButton />
          <ThemeButton />
        </div>
      </div>

      <InputAmount />

      <div className="flex flex-col gap-0">
        <div className="flex flex-col input-text">
          <CurrencySelect
            label={t("from")}
            value={from}
            onChange={(e) => dispatch(setFrom(e.target.value))}
          />
        </div>
        <div className="flex flex-col input-text">
          <CurrencySelect
            label={t("to")}
            value={to}
            onChange={(e) => dispatch(setTo(e.target.value))}
          />
        </div>
      </div>

      <ConvertButton label={t("convert")} />
      <Result />
      <HistoryList label={t("history")} error={t("history-error")} />
    </div>
  );
}
