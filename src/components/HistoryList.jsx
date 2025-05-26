import React from "react";
import { useSelector } from 'react-redux';

const HistoryList = () => {
  const history = useSelector((state) => state.history.entries);

  return (
    <>
      <h3 className="bg-teal-500">История:</h3>
      <ul className="list-disc">
        {history.map((item, i) => (
          <li key={i}>
            {item.amount} {item.from} → {item.to} ={" "}
            {typeof item.result === "number"
              ? item.result.toFixed(2)
              : item.result || "нет данных"}{" "}
            ({new Date(item.date).toLocaleString()})
          </li>
        ))}
      </ul>
    </>
  );
};

export default HistoryList;
