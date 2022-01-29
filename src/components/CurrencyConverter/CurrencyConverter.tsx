import React, { useState } from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';

import {
  Container,
  Currency,
  CurrencyWrapper,
  SwapIcon,
  ValueInput
} from './CurrencyConverter.styles';

interface CurrencyConverterProps {
  coinPrice: number;
  coinSymbol: string;
  currency: string;
}

export const CurrencyConverter = (props: CurrencyConverterProps) => {
  const [firstValue, setFirstValue] = useState(1);
  const [secondValue, setSecondValue] = useState(1);
  const [currencies, setCurrencies] = useState([
    props.currency,
    props.coinSymbol
  ]);

  const handleFirstValueOnChange = (val: number) => {
    setFirstValue(val);
  };

  const handleSecondValueOnChange = (val: number) => {
    setSecondValue(val);
  };

  const handleSwap = () => {
    setFirstValue(secondValue);
    setSecondValue(firstValue);
    setCurrencies(currencies.reverse());
  };
  const convertedValue =
    currencies[0] !== props.coinSymbol
      ? (firstValue / props.coinPrice).toFixed(6)
      : firstValue * Number(props.coinPrice.toFixed(2));

  return (
    <Container>
      <CurrencyWrapper>
        <Currency>{currencies[0]}</Currency>
        <ValueInput
          value={firstValue}
          thousandSeparator={true}
          prefix={getSymbolFromCurrency(currencies[0])}
          onValueChange={({ value }) => handleFirstValueOnChange(Number(value))}
        />
      </CurrencyWrapper>
      <>
        <SwapIcon onClick={handleSwap} />
      </>
      <CurrencyWrapper>
        <Currency>{currencies[1]}</Currency>
        <ValueInput
          value={convertedValue}
          thousandSeparator={true}
          prefix={getSymbolFromCurrency(currencies[1])}
          onValueChange={({ value }) =>
            handleSecondValueOnChange(Number(value))
          }
        />
      </CurrencyWrapper>
    </Container>
  );
};
