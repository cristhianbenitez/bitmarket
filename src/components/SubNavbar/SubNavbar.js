import React from 'react';

import coinGecko from 'api/coinGecko';
import { formattedNumber } from 'utils';
import {
  BitcoinIcon,
  BitcoinPercentage,
  BulletCircle,
  EthereumIcon,
  EthereumPercentage,
  LoadingText,
  PercentageBar,
  Subnav,
  SubnavItem,
  SubnavText,
  TotalVolumePercentage,
  Wrapper
} from './SubNavbar.styles';
import { CenterDiv } from 'components/CoinsTableRow/CoinsTableRow.styles';
import { Loading } from 'assets';

export class SubNavbar extends React.Component {
  state = {
    globalData: [],
    isLoading: true
  };
  getGlobalData = async () => {
    this.setState({ isLoading: true });
    try {
      const res = await coinGecko.get('/global');
      this.setState({ globalData: res.data.data, isLoading: false });
    } catch (err) {
      this.setState({ isLoading: true });
    }
  };
  componentDidMount = () => {
    this.getGlobalData();
  };

  render() {
    if (this.state.isLoading) return <Loading type="spin" width="20px" />;

    const totalMarketCap = formattedNumber(
      this.state.globalData.total_market_cap.usd,
      '($ 0.00a)'
    );
    const totalVolume = formattedNumber(
      this.state.globalData.total_volume.usd,
      '($ 0.00a)'
    );
    const ethereumMarketCapPercentage = Math.floor(
      this.state.globalData.market_cap_percentage.eth
    );
    const bitcoinMarketCapPercentage = Math.floor(
      this.state.globalData.market_cap_percentage.btc
    );

    return (
      <Subnav>
        <Wrapper>
          <SubnavItem>
            <SubnavText>Coins</SubnavText>{' '}
            {this.state.globalData.active_cryptocurrencies}
          </SubnavItem>
          <SubnavItem>
            <SubnavText>Exchange</SubnavText> {this.state.globalData.markets}
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
            {bitcoinMarketCapPercentage}%
            <PercentageBar>
              <BitcoinPercentage
                percentage={`${bitcoinMarketCapPercentage}%`}
              />
            </PercentageBar>
          </SubnavItem>
          <SubnavItem>
            <EthereumIcon />
            {ethereumMarketCapPercentage}%
            <PercentageBar>
              <EthereumPercentage
                percentage={`${ethereumMarketCapPercentage}%`}
              />
            </PercentageBar>
          </SubnavItem>
        </Wrapper>
      </Subnav>
    );
  }
}
