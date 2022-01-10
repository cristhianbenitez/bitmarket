import React, { Component } from 'react';

import { Modal, AssetsListRow } from 'components';
import {
  Container,
  PageHead,
  Subtitle,
  Button,
  AssetsList
} from './Portfolio.styles';
import coinGecko from 'api/coinGecko';
import { v4 as uuid } from 'uuid';

export class Portfolio extends Component {
  state = {
    isLoading: false,
    isModalOpen: false,
    assets: []
  };

  addAsset = async (asset) => {
    this.setState({ isLoading: true });
    const { coinId, purchasedAmount, date } = asset;
    const purchasedDate = date.split('-').reverse().join('-');
    const { data } = await coinGecko.get(`/coins/${coinId}/history`, {
      params: {
        date: purchasedDate,
        localization: 'false'
      }
    });
    const uniqueId = uuid().slice(0, 8);
    const historicPriceData = data.market_data.current_price.usd;
    const { image, name, symbol, id } = data;
    const assetInformation = {
      uniqueId,
      name,
      symbol,
      id,
      image: image.small,
      purchasedDate,
      purchasedAmount,
      historicPriceData
    };
    this.setState((prevState) => ({
      isLoading: false,
      assets: [...prevState.assets, assetInformation]
    }));
    localStorage.setItem('assets', JSON.stringify(this.state.assets));
  };

  toggleModal = () =>
    this.setState((prevState) => ({ isModalOpen: !prevState.isModalOpen }));

  removeAsset = (coinId) => {
    const assets = Object.assign(this.state.assets);
    const filteredAssets = assets.filter((asset) => asset.uniqueId !== coinId);
    this.setState({ assets: filteredAssets });
    localStorage.setItem('assets', JSON.stringify(filteredAssets));
  };

  componentDidMount = () => {
    if (localStorage.assets && this.state.assets) {
      const currAssets = JSON.parse(localStorage.getItem('assets'));
      this.setState({
        assets: currAssets
      });
    }
  };

  render() {
    return (
      <Container>
        <PageHead>
          <Button onClick={this.toggleModal}>Add Asset</Button>
          {this.state.isModalOpen && (
            <Modal toggleModal={this.toggleModal} addAsset={this.addAsset} />
          )}
        </PageHead>
        <Subtitle>Your statistics</Subtitle>
        <AssetsList>
          {this.state.assets.length > 0 &&
            this.state.assets.map((asset) => {
              return (
                <AssetsListRow
                  key={asset.uniqueId}
                  asset={asset}
                  currency={this.props.currency}
                  removeAsset={this.removeAsset}
                />
              );
            })}
          {this.props.isLoading && <Loading type="spin" />}
        </AssetsList>
      </Container>
    );
  }
}
