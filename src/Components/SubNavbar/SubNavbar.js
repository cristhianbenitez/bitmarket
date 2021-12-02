import React from 'react';
import coinGecko from '../../Api/coinGecko';
import { formattedNumber } from '../../Utils';
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
      ('err');
    }
  };
  componentDidMount = () => {
    this.getGlobalData();
  };

  render() {
    /* ( ?. ) -->  Optional Chaining , by doing question mark and a dot. It checks if it exists or not */
    const totalMarketCap = formattedNumber(
      this.state.globalData?.total_market_cap?.usd,
      '($ 0.00a)'
    );
    const totalVolume = formattedNumber(
      this.state.globalData?.total_volume?.usd,
      '($ 0.00a)'
    );
    const ethereumMarketCapPercentage = Math.floor(
      this.state.globalData?.market_cap_percentage?.eth
    );
    const bitcoinMarketCapPercentage = Math.floor(
      this.state.globalData?.market_cap_percentage?.btc
    );
    return (
      <Subnav>
        {this.state.isLoading ? (
          <LoadingText>Loading...</LoadingText>
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
        )}
      </Subnav>
    );
  }
}
