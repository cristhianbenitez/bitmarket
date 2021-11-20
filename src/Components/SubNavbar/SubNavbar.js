import React, { useEffect, useState } from 'react';
import coinGecko from '../../Api/coinGecko';
import {
  BitcoinIcon,
  BulletCircle,
  EthereumIcon,
  TotalVolumePercentage,
  PercentageBar,
  Subnav,
  SubnavItem,
  BitcoinPercentage,
  EthereumPercentage,
  SubnavText,
  Wrapper
} from './SubNavbar.styles';
import numeral from 'numeral';

export class SubNavbar extends React.Component {
  state = {
    globalData: [],
    isLoading: false
  };
  getGlobalData = async () => {
    this.setState({ isLoading: true });
    try {
      const res = await coinGecko.get('/global');
      this.setState({ globalData: res.data.data, isLoading: false });
    } catch (err) {
      console.log('err');
    }
  };
  componentDidMount = () => {
    this.getGlobalData();
  };

  render() {
    /* ( ?. ) -->  Optional Chaining , by doing question mark and a dot. It checks if it exists or not */
    const totalMarketCap = numeral(this.state.globalData?.total_market_cap?.usd)
      .format('($ 0.00a)')
      .toUpperCase();
    const totalVolume = numeral(this.state.globalData?.total_volume?.usd)
      .format('($ 0.00a)')
      .toUpperCase();
    const ethereumMarketCapPercentage = Math.floor(
      this.state.globalData?.market_cap_percentage?.eth
    );
    const bitcoinMarketCapPercentage = Math.floor(
      this.state.globalData?.market_cap_percentage?.btc
    );
    return (
      <Subnav>
        {this.state.isLoading ? (
          <p>Loading...</p>
        ) : (
          <Wrapper>
            <SubnavItem>
              <SubnavText>Coins</SubnavText>{' '}
              {this.state.globalData?.active_cryptocurrencies}
            </SubnavItem>
            <SubnavItem>
              <SubnavText>Exchange</SubnavText> {this.state.globalData?.markets}
            </SubnavItem>
            <BulletCircle />
            <SubnavItem> {totalMarketCap}</SubnavItem>
            <BulletCircle />
            <SubnavItem>
              {totalVolume}
              <PercentageBar>
                <TotalVolumePercentage percentage="25%" />
              </PercentageBar>
            </SubnavItem>
            <SubnavItem>
              <BitcoinIcon />
              {ethereumMarketCapPercentage}%
              <PercentageBar>
                <BitcoinPercentage percentage="25%" />
              </PercentageBar>
            </SubnavItem>
            <SubnavItem>
              <EthereumIcon />
              {bitcoinMarketCapPercentage}%
              <PercentageBar>
                <EthereumPercentage percentage="25%" />
              </PercentageBar>
            </SubnavItem>
          </Wrapper>
        )}
      </Subnav>
    );
  }
}
