import React, { Component } from 'react';

import { Modal } from 'components';
import { Container, Subtitle } from './Portfolio.styles';
import coinGecko from 'api/coinGecko';

export class Portfolio extends Component {
  state = {
    isLoading: false,
    coins: []
  };
  getCoins = async () => {
    this.setState({ ...this.state, isLoading: true });
    const { data } = await coinGecko.get(`/coins/markets`, {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: '250'
      }
    });
    this.setState({
      ...this.state,
      isLoading: false,
      coins: data
    });
  };

  componentDidMount = () => {
    this.getCoins();
  };
  render() {
    return this.state.isLoading ? (
      <div>Loading...</div>
    ) : (
      <Container>
        <Subtitle>Portfolio</Subtitle>
        <Modal coins={this.state.coins} />
      </Container>
    );
  }
}
