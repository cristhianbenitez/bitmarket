import React, { Component } from 'react';

import { Charts, CoinsTable } from 'components';
import coinGecko from 'api/coinGecko';
import {
  Arrow,
  ArrowsContainer,
  ChartContainer,
  ChartWrapper,
  CoinListContainer,
  Container,
  Subtitle
} from './Coins.styles';
import { CenterDiv, Loading } from 'assets';
export class Coins extends Component {
  state = {
    isLoading: true,
    coinPrice: [],
    volume24h: [],
    currency: this.props.currency,
    resultsPerPage: 10,
    isVisible: false
  };

  formatData = (data) => data.map(([x, y]) => ({ x, y: y.toFixed(2) }));

  getChartData = async (currency) => {
    this.setState({ isLoading: true });
    const [volume24h, coinPrice] = await Promise.all([
      coinGecko.get('/coins/bitcoin/market_chart', {
        params: { vs_currency: currency, days: '30', interval: 'daily' }
      }),
      coinGecko.get('/coins/bitcoin/market_chart', {
        params: { vs_currency: currency, days: '1', interval: 'hourly' }
      })
    ]);

    this.setState({
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

  show = () => {
    this.setState((prevState) => ({ isVisible: !prevState.isVisible }));
  };
  render() {
    const latestData = {
      latestCoinPrice: this.state.coinPrice[this.state.coinPrice.length - 1],
      latestVolume24h: this.state.volume24h[this.state.volume24h.length - 1]
    };

    if (this.state.isLoading)
      return (
        <CenterDiv>
          <Loading type="spin" />
        </CenterDiv>
      );

    return (
      <Container>
        <Subtitle>Your overview</Subtitle>
        <ChartWrapper isVisible={this.state.isVisible}>
          <ChartContainer id="line-chart">
            <Charts
              chartData={this.state.coinPrice}
              latestData={latestData}
              currency={this.props.currency}
              show={this.show}
              lineChart
            />
          </ChartContainer>
          <ChartContainer id="bar-chart">
            <Charts
              chartData={this.state.volume24h}
              latestData={latestData}
              currency={this.props.currency}
              show={this.show}
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
