import React, { Component } from 'react';

import getSymbolFromCurrency from 'currency-symbol-map';
import { formattedNumber, todayDate } from 'utils';
import {
  Arrow,
  ArrowsContainer,
  Legend,
  CoinInfo,
  CoinInfoDate,
  CoinInfoTitle,
  CoinInfoValue
} from './ChartsLegend.styles';

export class ChartsLegend extends Component {
  render() {
    const currencySymbol = getSymbolFromCurrency(this.props.currency);
    const latestCoinPrice = formattedNumber(
      this.props.latestData.latestCoinPrice.y,
      `10,000.00`
    );
    const latestVolume24h = formattedNumber(
      this.props.latestData.latestVolume24h.y,
      '(0.000a)'
    );
    return (
      <Legend>
        <CoinInfo>
          <CoinInfoTitle>
            {this.props.lineChart ? 'Bitcoin' : 'Volume 24h'}
          </CoinInfoTitle>
          <CoinInfoValue>
            {currencySymbol}
            {this.props.lineChart ? latestCoinPrice : latestVolume24h}
          </CoinInfoValue>
          <CoinInfoDate>{todayDate} </CoinInfoDate>
        </CoinInfo>
        <ArrowsContainer>
          <Arrow left onClick={this.props.show} />
          <Arrow onClick={this.props.show} />
        </ArrowsContainer>
      </Legend>
    );
  }
}
