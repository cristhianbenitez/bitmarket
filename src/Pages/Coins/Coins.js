import React, { Component } from 'react';

const MarketChartAPI =
  'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: 'Crypto Market Chart',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(0, 255, 95)',
      yAxisID: 'y-axis-1',
      tension: 0.5,
      pointRadius: 0
    }
  ]
};

const options = {
  plugins: {
    legend: false
  },
  scales: {
    y: {
      display: false,
      beginAtZero: true
    },
    x: {
      beginAtZero: true
    }
  }
};
export class Coins extends Component {
  render() {
    return (
      <div>
        <h1>Coins</h1>
      </div>
    );
  }
}
