import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  const { result, status, to, error } = useSelector((state) => state.currency);
  return (
    <>
      {status === "loading" && <p>Загрузка...</p>}
      {error && <p className="text-sm text-red-900">Ошибка: {error}</p>}

      {typeof result === "number" ? (
        <p className="text-xl mt-4 mb-2 font-bold">
          {to} {result.toFixed(2)}
        </p>
      ) : (
        <p></p>
      )}
    </>
  );
};

export default Result;
