import getSymbolFromCurrency from 'currency-symbol-map';
import React, { Component } from 'react';
import { formattedNumber, todayDate } from 'Utils';
import {
  CoinInfo,
  CoinInfoDate,
  CoinInfoTitle,
  CoinInfoValue
} from './ChartsLegend.styles';

export class ChartsLegend extends Component {
  render() {
    const currencySymbol = getSymbolFromCurrency(this.props.currency);
    const latestCoinPrice = formattedNumber(
      this.props.latestData?.latestCoinPrice?.y,
      `10,000.00`
    );
    const latestVolume24h = formattedNumber(
      this.props.latestData?.latestVolume24h?.y,
      '(0.000a)'
    );
    return (
      <CoinInfo>
        <CoinInfoTitle>
          {this.props.lineChart ? localStorage.selection : 'Volume 24h'}
        </CoinInfoTitle>
        <CoinInfoValue>
          {currencySymbol}
          {this.props.lineChart ? latestCoinPrice : latestVolume24h}
        </CoinInfoValue>
        <CoinInfoDate>{todayDate} </CoinInfoDate>
      </CoinInfo>
    );
  }
}
