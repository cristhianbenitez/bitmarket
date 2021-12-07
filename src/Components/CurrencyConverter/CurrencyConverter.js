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
    firstCurrency: localStorage.selection,
    secondCurrency: this.props.coinSymbol,
    firstValue: 1,
    secondValue: 1
  };

  handleFirstValueOnChange = (value) => {
    this.setState({ ...this.state, firstValue: value });
  };
  handleSecondValueOnChange = (value) => {
    this.setState({ ...this.state, secondValue: value });
  };
  handleSwap = (state) => {
    const swappedState = {
      firstValue: state.secondValue,
      firstCurrency: state.secondCurrency,
      secondValue: state.firstValue,
      secondCurrency: state.firstCurrency
    };
    this.setState({
      ...swappedState
    });
  };
  render() {
    const convertedValue =
      this.state.firstCurrency !== this.props.coinSymbol
        ? (this.state.firstValue / this.props.coinPrice)?.toFixed(6)
        : this.state.firstValue * this.props.coinPrice?.toFixed(2);

    return (
      <Container>
        <CurrencyWrapper>
          <Currency>{this.state.firstCurrency}</Currency>

          <ValueInput
            value={this.state.firstValue}
            thousandSeparator={true}
            prefix={getSymbolFromCurrency(this.state.firstCurrency)}
            onValueChange={({ value }) => this.handleFirstValueOnChange(value)}
          />
        </CurrencyWrapper>
        <div>
          <SwapIcon onClick={() => this.handleSwap(this.state)} />
        </div>
        <CurrencyWrapper>
          <Currency>{this.state.secondCurrency}</Currency>

          <ValueInput
            value={convertedValue}
            thousandSeparator={true}
            prefix={getSymbolFromCurrency(this.state.secondCurrency)}
            onValueChange={({ value }) => this.handleSecondValueOnChange(value)}
          />
        </CurrencyWrapper>
      </Container>
    );
  }
}
