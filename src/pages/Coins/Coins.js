import React, { Component } from 'react';

import { Charts, CoinsTable } from 'components';
import coinGecko from 'api/coinGecko';
import {
  ChartContainer,
  ChartWrapper,
  CoinListContainer,
  Container,
  Subtitle
} from './Coins.styles';
export class Coins extends Component {
  state = {
    isLoading: false,
    coinPrice: [],
    volume24h: [],
    currency: this.props.currency
  };

  formatData = (data) => data.map(([x, y]) => ({ x, y: y.toFixed(2) }));

  getChartData = async (currency) => {
    this.setState({ ...this.state, isLoading: true });
    const [volume24h, coinPrice] = await Promise.all([
      coinGecko.get('/coins/bitcoin/market_chart', {
        params: { vs_currency: currency, days: '30', interval: 'daily' }
      }),
      coinGecko.get('/coins/bitcoin/market_chart', {
        params: { vs_currency: currency, days: '1', interval: 'hourly' }
      })
    ]);

    this.setState({
      ...this.state,
      isLoading: false,
      volume24h: this.formatData(volume24h.data.total_volumes),
      coinPrice: this.formatData(coinPrice.data.prices)
    });
  };

  componentDidMount() {
    if (this.props.currency) {
      this.getChartData(this.props.currency);
    }
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.currency !== this.props.currency) {
      this.getChartData(this.props.currency);
      this.setState({ currency: this.props.currency });
    }
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
          <CoinsTable currency={this.props.currency} />
        </CoinListContainer>
      </Container>
    );
  }
}
