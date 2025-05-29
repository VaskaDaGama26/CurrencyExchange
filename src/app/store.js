import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "../features/currency/currencySlice";
import historyReducer from "../features/history/historySlice";
import currenciesReducer from "../features/currency/currenciesSlice";
import themeReducer from "../features/theme/themeSlice"
import languageReducer from "../features/language/languageSlice"

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    history: historyReducer,
    currencies: currenciesReducer,
    theme: themeReducer,
    language: languageReducer,
  },
});
