import React, { Component } from 'react';

import { Modal, AssetsListRow } from 'components';
import { Container, PageHead, Subtitle, AssetsList } from './Portfolio.styles';
import coinGecko from 'api/coinGecko';

export class Portfolio extends Component {
  state = {
    isLoading: false,
    supportedCoins: [],
    assets: []
  };
  getSupportedCoins = async () => {
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
      supportedCoins: data
    });
  };

  addAsset = (newAsset) => {
    const updatedAssets = [...this.state.assets, newAsset];
    this.setState({
      ...this.state,
      assets: updatedAssets
    });
    localStorage.setItem('assets', JSON.stringify(updatedAssets));
  };

  removeAsset = (coinId) => {
    const updatedAssets = this.state.assets.filter(
      (asset) => asset.coinId !== coinId
    );
    this.setState({
      ...this.state,
      assets: updatedAssets
    });
    localStorage.setItem('assets', JSON.stringify(updatedAssets));
  };
  componentDidMount = () => {
    this.getSupportedCoins();
    if (localStorage.assets.length > 0) {
      const currAssets = JSON.parse(localStorage.getItem('assets'));
      this.setState({
        ...this.state,
        assets: currAssets
      });
    }
  };

  render() {
    return this.state.isLoading ? (
      <div>Loading...</div>
    ) : (
      <Container>
        <PageHead>
          <Modal
            supportedCoins={this.state.supportedCoins}
            addAsset={this.addAsset}
          />
        </PageHead>
        <Subtitle>Your statistics</Subtitle>

        <AssetsList>
          {this.state.assets.length > 0 &&
            !this.state.isLoading &&
            this.state.assets.map((asset, index) => {
              const { coinId, purchasedAmount, date } = asset;
              return (
                <AssetsListRow
                  key={index}
                  id={coinId}
                  coinAmount={purchasedAmount}
                  purchaseDate={date}
                  removeAsset={this.removeAsset}
                />
              );
            })}
        </AssetsList>
      </Container>
    );
  }
}
