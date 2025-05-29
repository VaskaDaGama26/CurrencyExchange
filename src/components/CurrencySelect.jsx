import React from "react";
import { useSelector } from "react-redux";

import { useTranslation } from "react-i18next";

const CurrencySelect = ({ label, value, onChange }) => {
  const { t } = useTranslation();
  const { currencies, status } = useSelector((state) => state.currencies);

  return (
    <>
      <h3 className="font-light mb-1">{label}</h3>
      <select
        className="border mb-2 w-full"
        value={value}
        onChange={onChange}
        disabled={status !== "succeeded"}
      >
        {status === "loading" && (
          <option className="input-text">{t('loading')}</option>
        )}
        {status === "failed" && (
          <option className="input-text">{t('loading-error')}</option>
        )}
        {status === "succeeded" &&
          currencies.map(([code, name]) => (
            <option className="input-text" key={code} value={code}>
              {code} — {name}
            </option>
          ))}
      </select>
    </>
  );
};

export default CurrencySelect;
