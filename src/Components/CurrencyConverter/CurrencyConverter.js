import React, { Component } from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';

import {
  Container,
  Currency,
  CurrencyWrapper,
  SwapIcon,
  ValueInput
} from './CurrencyConverter.styles';
export class CurrencyConverter extends Component {
  state = {
    currencies: [
      { currencyValue: 1, currencyName: localStorage.selection },
      { currencyValue: 1, currencyName: this.props.coinSymbol }
    ]
  };

  handleFirstValueOnChange = (val) => {
    this.setState((prevState) => ({
      currencies: [
        { currencyValue: val, currencyName: localStorage.selection },
        prevState.currencies[1]
      ]
    }));
  };
  handleSecondValueOnChange = (val) => {
    this.setState((prevState) => ({
      currencies: [
        prevState.currencies[0],
        { currencyValue: val, currencyName: this.props.coinSymbol }
      ]
    }));
  };
  handleSwap = (state) => {
    const swappedState = state.reverse();
    this.setState({
      currencies: swappedState
    });
  };
  render() {
    const convertedValue =
      this.state.currencies[0]?.currencyName !== this.props.coinSymbol
        ? (
            this.state.currencies[0]?.currencyValue / this.props.coinPrice
          )?.toFixed(6)
        : this.state.currencies[0]?.currencyValue *
          this.props.coinPrice?.toFixed(2);

    return (
      <Container>
        <CurrencyWrapper>
          <Currency>{this.state.currencies[0].currencyName}</Currency>

          <ValueInput
            value={this.state.currencies[0].currencyValue}
            thousandSeparator={true}
            prefix={getSymbolFromCurrency(
              this.state.currencies[0].currencyName
            )}
            onValueChange={({ value }) => this.handleFirstValueOnChange(value)}
          />
        </CurrencyWrapper>
        <div>
          <SwapIcon onClick={() => this.handleSwap(this.state.currencies)} />
        </div>
        <CurrencyWrapper>
          <Currency>{this.state.currencies[1].currencyName}</Currency>

          <ValueInput
            value={convertedValue}
            thousandSeparator={true}
            prefix={getSymbolFromCurrency(
              this.state.currencies[1].currencyName
            )}
            onValueChange={({ value }) => this.handleSecondValueOnChange(value)}
          />
        </CurrencyWrapper>
      </Container>
    );
  }
}
