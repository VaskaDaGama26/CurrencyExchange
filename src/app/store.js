import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "../features/currency/currencySlice";
import historyReducer from "../features/history/historySlice";
import currenciesReducer from "../features/currency/currenciesSlice";

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    history: historyReducer,
    currencies: currenciesReducer,
  },
});
