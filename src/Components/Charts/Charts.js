import React, { Component } from 'react';
import {
  ChartsWrapper,
  CoinInfo,
  CoinInfoTitle,
  CoinInfoValue,
  CoinInfoDate
} from './Charts.styles';
import { Bar, Line } from 'react-chartjs-2';
import { chartOptions } from './ChartsOptions';
import { addZero, formattedNumber, todayDate } from '../../Utils';
import getSymbolFromCurrency from 'currency-symbol-map';

export class Charts extends Component {
  render() {
    const chartDataTimes = (time) => {
      return this.props.chartData.map((coin) => {
        const date = new Date(coin.x);

        return time === 'day'
          ? date.getDate()
          : time === 'hour'
          ? addZero(date.getHours())
          : null;
      });
    };
    const arrOfData = this.props.chartData.map((coin) => coin.y);
    const barChartData = {
      labels: chartDataTimes('day'),

      datasets: [
        {
          data: arrOfData,
          fill: false,
          backgroundColor: '#2172E5',
          borderColor: '#2172E5',
          borderRadius: '2',
          barThickness: 14,
          maxBarThickness: 18
        }
      ]
    };

    const lineChartData = (canvas) => {
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createLinearGradient(0, 0, 0, 250);
      gradient.addColorStop(0, 'rgba(0,255,95,0.175)');
      gradient.addColorStop(1, 'rgba(0,255,95,0)');

      return {
        labels: chartDataTimes('hour'),

        datasets: [
          {
            label: 'Price',
            data: arrOfData,
            fill: true,
            borderColor: '#00FF5F',
            backgroundColor: gradient,
            borderRadius: '2',
            tension: 0.5,
            pointBackgroundColor: 'transparent',
            pointBorderColor: 'transparent'
          }
        ]
      };
    };
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
      <ChartsWrapper>
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
        {this.props.lineChart ? (
          <Line data={lineChartData} options={chartOptions} />
        ) : this.props.barChart ? (
          <Bar data={barChartData} options={chartOptions} />
        ) : null}
      </ChartsWrapper>
    );
  }
}
Charts.defaultProps = {
  barChart: true,
  lineChart: false
};
