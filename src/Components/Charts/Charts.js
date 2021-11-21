import React, { Component } from 'react';
import {
  ChartsWrapper,
  CoinInfo,
  CoinInfoTitle,
  CoinInfoValue,
  CoinInfoDate
} from './Charts.styles';
import { Bar, Line } from 'react-chartjs-2';
import { barChartOptions } from './ChartsOptions';
import { addZero } from '../../Utils';
import numeral from 'numeral';
export class Charts extends Component {
  render() {
    const barChartData = {
      labels: this.props.ChartData.map((coin) => {
        const date = new Date(coin.x);
        const day = date.getDate();
        return day;
      }),

      datasets: [
        {
          data: this.props.ChartData.map((coin) => coin.y),
          fill: false,
          backgroundColor: '#2172E5',
          borderColor: '#2172E5',
          borderRadius: '2',
          tension: 0.5,
          pointRadius: 0,
          barThickness: 10,
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
        labels: this.props.ChartData.map((coin) => {
          let date = new Date(coin.x);
          let time = date.getHours();
          return addZero(time);
        }),

        datasets: [
          {
            label: 'Bitcoin Price',
            data: this.props.ChartData.map((coin) => coin.y),
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
    const latestCoinPrice = numeral(
      this.props.latestData?.latestCoinPrice?.y
    ).format('$10,000.00');

    const latestVolume24h = numeral(this.props.latestData?.latestVolume24h?.y)
      .format('($0.000a)')
      .toUpperCase();
    const todayDate = new Date().toString().split(' ').splice(1, 3).join(' ');

    return (
      <ChartsWrapper>
        <CoinInfo>
          <CoinInfoTitle>
            {this.props.lineChart ? localStorage.selection : 'Volume 24h'}
          </CoinInfoTitle>
          <CoinInfoValue>
            {this.props.lineChart ? latestCoinPrice : latestVolume24h}
          </CoinInfoValue>
          <CoinInfoDate>{todayDate} </CoinInfoDate>
        </CoinInfo>
        {this.props.lineChart ? (
          <Line data={lineChartData} options={barChartOptions} />
        ) : this.props.barChart ? (
          <Bar data={barChartData} options={barChartOptions} />
        ) : null}
      </ChartsWrapper>
    );
  }
}
Charts.defaultProps = {
  barChart: true,
  lineChart: false
};
