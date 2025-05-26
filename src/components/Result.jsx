import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  const { result, status, error } = useSelector(
    (state) => state.currency
  );
  return (
    <>
      {status === "loading" && <p>Загрузка...</p>}
      {error && <p style={{ color: "red" }}>Ошибка: {error}</p>}

      {typeof result === "number" ? (
        <p className="text-xl">Результат: {result.toFixed(2)}</p>
      ) : (
        <p>Результат: нет данных</p>
      )}
    </>
  );
};

export default Result;
