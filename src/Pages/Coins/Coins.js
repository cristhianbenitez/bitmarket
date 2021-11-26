import React, { Component } from 'react';
import coinGecko from '../../Api/coinGecko';
import {
  Container,
  Subtitle,
  ChartContainer,
  CoinListContainer,
  ChartWrapper
} from './Coins.styles';
import { Charts, CoinsList } from '../../Components';
export class Coins extends Component {
  state = {
    isLoading: false,
    coinPrice: [],
    volume24h: []
  };

  formatData = (data) => data.map(([x, y]) => ({ x, y: y.toFixed(2) }));

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
        <ChartWrapper>
          <ChartContainer>
            <Charts
              chartData={this.state.coinPrice}
              latestData={latestData}
              currency={this.props.currency}
              lineChart
            />
          </ChartContainer>
          <ChartContainer>
            <Charts
              chartData={this.state.volume24h}
              latestData={latestData}
              currency={this.props.currency}
              barChart
            />
          </ChartContainer>
        </ChartWrapper>
        <Subtitle>Your overview</Subtitle>
        <CoinListContainer>
          <CoinsList />
        </CoinListContainer>
      </Container>
    );
  }
}
