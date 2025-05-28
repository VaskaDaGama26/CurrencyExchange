import React from "react";
import { useSelector } from "react-redux";

const HistoryList = () => {
  const history = useSelector((state) => state.history.entries);

  return (
    <>
      <hr className="text-gray-300 mt-2" />
      <h3 className="text-sm font-bold text-(--text-main)">История:</h3>
      <ul className="text-sm">
        {history.map((item, i) => (
          <li key={i} className="mb-2 text-(--text-main)">
            - {item.amount} {item.from} ={" "}
            {typeof item.result === "number"
              ? item.result.toFixed(2)
              : item.result || "нет данных"}{" "}
            {item.to}
            <p className="text-(--text-date)">
              ({new Date(item.date).toLocaleString()})
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HistoryList;
