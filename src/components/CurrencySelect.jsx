import React from "react";
import { useSelector } from "react-redux";

const CurrencySelect = ({ value, onChange }) => {
  const { currencies, status } = useSelector((state) => state.currencies);

  return (
    <select className="border mb-2" value={value} onChange={onChange} disabled={status !== "succeeded"}>
      {status === "loading" && <option>Загрузка...</option>}
      {status === "failed" && <option>Ошибка загрузки</option>}
      {status === "succeeded" &&
        currencies.map(([code, name]) => (
          <option key={code} value={code}>
            {code} — {name}
          </option>
        ))}
    </select>
  );
};

export default CurrencySelect;
