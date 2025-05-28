import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  const { result, status, to, error } = useSelector((state) => state.currency);
  return (
    <div className="text-(--text-main)">
      {status === "loading" && <p className="text-md mt-4">Загрузка...</p>}
      {error && <p className="text-md mt-4 text-(--text-error)">Ошибка: {error}</p>}

      {typeof result === "number" ? (
        <p className="text-xl mt-4 mb-2 font-bold">
          {result.toFixed(2)} {to}
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Result;
