import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Result = () => {
  const { t } = useTranslation();
  const { result, status, to, error } = useSelector((state) => state.currency);
  return (
    <div className="text-(--text-main)">
      {status === "loading" && <p className="text-md mt-4">{t('loading')}</p>}
      {error && <p className="text-sm font-bold mt-4 text-(--text-error)">{t('error')}: {error}</p>}

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
