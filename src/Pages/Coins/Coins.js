import React, { Component } from 'react';
import coinGecko from '../../Api/coinGecko';
import {
  Container,
  Subtitle,
  ChartsContainer,
  LineChart,
  BarChart,
  ChartWrapper
} from './Coins.styles';

export class Coins extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }
  state = {
    isLoading: false,
    marketCap: [],
    volume24h: []
  };

  formatData = (data) => data.map((el) => ({ x: el[0], y: el[1].toFixed(2) }));

  getChartData = async () => {
    this.setState({ ...this.state, isLoading: true });
    const res = await coinGecko.get('/coins/bitcoin/market_chart', {
      params: { vs_currency: 'usd', days: '30' }
    });
    this.setState({
      ...this.state,
      isLoading: false,
      volume24h: this.formatData(res.data.total_volumes)
    });
  };

  componentDidMount = () => {
    this.getChartData();
  };
  render() {
    const data = {
      labels: this.state.volume24h.map((coin) => {
        console.log(coin);
        let date = new Date(coin.x);
        let time = date.getUTCHours();
        return time;
      }),

      datasets: [
        {
          label: 'Bitcoin Price',
          data: this.state.volume24h.map((coin) => coin.y),
          fill: false,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(0, 255, 95)',
          tension: 0.5,
          pointRadius: 0
        }
      ]
    };

    const options = {
      elements: {
        point: {
          radius: 1
        }
      },
      lineHeightAnnotation: {
        always: true,
        hover: false,
        lineWeight: 1.5
      },
      plugins: {
        legend: false
      },
      animation: {
        duration: 2000
      },
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        y: {
          display: false
        },
        x: {
          beginAtZero: true
        }
      }
    };
    console.log(this.state.volume24h);
    console.log(new Date(this.state.volume24h.t));
    return (
      <Container>
        <h1>Coins</h1>
        <Subtitle>Your overview</Subtitle>
        <ChartsContainer>
          <ChartWrapper>
            <LineChart data={data} options={options} />
          </ChartWrapper>
          <ChartWrapper>
            <BarChart data={data} options={options} />
          </ChartWrapper>
        </ChartsContainer>
      </Container>
    );
  }
}
