import React, { Component } from 'react';
import coinGecko from '../../Api/coinGecko';
import { Container, Subtitle, ChartsContainer } from './Coins.styles';
import { Charts } from '../../Components';
export class Coins extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }
  state = {
    isLoading: false,
    coinPrice: [],
    volume24h: []
  };

  formatData = (data) => data.map((el) => ({ x: el[0], y: el[1].toFixed(2) }));

  getChartData = async () => {
    this.setState({ ...this.state, isLoading: true });
    const [volume24h, coinPrice] = await Promise.all([
      coinGecko.get('/coins/bitcoin/market_chart', {
        params: { vs_currency: 'usd', days: '30', interval: 'daily' }
      }),
      coinGecko.get('/coins/bitcoin/market_chart', {
        params: { vs_currency: 'usd', days: '1', interval: 'hourly' }
      })
    ]);

    this.setState({
      ...this.state,
      isLoading: false,
      volume24h: this.formatData(volume24h.data.total_volumes),
      coinPrice: this.formatData(coinPrice.data.prices)
    });
  };

  componentDidMount = () => {
    this.getChartData();
  };
  render() {
    const latestData = {
      latestCoinPrice: this.state.coinPrice[this.state.coinPrice.length - 1],
      latestVolume24h: this.state.volume24h[this.state.volume24h.length - 1]
    };
    return (
      <Container>
        <Subtitle>Your overview</Subtitle>
        <ChartsContainer>
          <Charts
            ChartData={this.state.coinPrice}
            latestData={latestData}
            lineChart
          />
          <Charts
            ChartData={this.state.volume24h}
            latestData={latestData}
            barChart
          />
        </ChartsContainer>
        <Subtitle>Your overview</Subtitle>
      </Container>
    );
  }
}
