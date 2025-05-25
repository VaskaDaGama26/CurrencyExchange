import React from "react";
import ConvertButton from "./components/ConvertButton";
import CurrencySelector from "./components/CurrencySelector";
import HistoryList from "./components/HistoryList";
import InputAmount from "./components/InputAmount";
import Result from "./components/Result";

const App = () => {
  return (
    <>
      <InputAmount />
      <CurrencySelector /> {/* Из какой валюты */}
      <CurrencySelector /> {/* В какую валюту */}
      <ConvertButton />
      <Result />
      <HistoryList />
    </>
  );
};

export default App;


