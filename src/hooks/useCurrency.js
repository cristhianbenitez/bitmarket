import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

const CurrencyContext = createContext(null);

export const useCurrency = () => {
  const [currency, setCurrency] = useContext(CurrencyContext);
  const [_, setLocalCurrency] = useLocalStorage('currency', currency);

  const handleCurrency = (value) => {
    setCurrency(value);
    setLocalCurrency(value);
  };

  return { value: currency, onChange: handleCurrency };
};

export const CurrencyProvider = ({ children }) => {
  const [localCurrency, _] = useLocalStorage('currency', 'usd');
  const [currency, setCurrency] = useState(localCurrency);

  return (
    <CurrencyContext.Provider value={[currency, setCurrency]}>
      {children}
    </CurrencyContext.Provider>
  );
};
