import React, { Component } from 'react';
import { Container, Subtitle } from './Home.styles';
import { Line } from 'react-chartjs-2';

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
      borderColor: 'rgba(255, 99, 132, 0.2)',
      yAxisID: 'y-axis-1'
    }
  ]
};

const options = {
  plugins: {
    legend: false
  },
  scales: {
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1'
      }
    ]
  }
};
export class Home extends Component {
  render() {
    return (
      <Container>
        <Subtitle>Home</Subtitle>
        <Line data={data} options={options} />
      </Container>
    );
  }
}
