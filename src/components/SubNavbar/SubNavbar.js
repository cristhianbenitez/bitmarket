import React from 'react';

import coinGecko from 'api/coinGecko';
import { calculatePercentage, formattedNumber } from 'utils';
import {
  BitcoinIcon,
  PercentageFiller,
  BulletCircle,
  EthereumIcon,
  PercentageBar,
  Separator,
  Subnav,
  SubnavItem,
  Text,
  ItemContainer,
  Wrapper
} from './SubNavbar.styles';
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

    const {
      total_market_cap,
      total_volume,
      market_cap_percentage,
      active_cryptocurrencies,
      markets
    } = this.state?.globalData;

    const totalMarketCap = formattedNumber(total_market_cap.usd, '($0.00a)');
    const totalVolume = formattedNumber(total_volume.usd, '($0.00a)');
    const ethereumMarketCapPercentage = Math.floor(market_cap_percentage.eth);
    const bitcoinMarketCapPercentage = Math.floor(market_cap_percentage.btc);

    const { percentageA: totalVolumePercentage } = calculatePercentage(
      total_volume.usd,
      total_market_cap.usd
    );

    return (
      <Subnav>
        <Wrapper>
          <SubnavItem>
            <Text>Coins</Text> {active_cryptocurrencies}
          </SubnavItem>
          <SubnavItem>
            <Text>Exchange</Text>
            {markets}
          </SubnavItem>
          <SubnavItem>
            <BulletCircle />
            {totalMarketCap}
          </SubnavItem>
          <Separator>
            <ItemContainer>
              <BulletCircle />
              {totalVolume}
              <PercentageBar>
                <PercentageFiller percentage={totalVolumePercentage} />
              </PercentageBar>
            </ItemContainer>
            <ItemContainer>
              <BitcoinIcon />
              {bitcoinMarketCapPercentage}%
              <PercentageBar>
                <PercentageFiller percentage={bitcoinMarketCapPercentage} />
              </PercentageBar>
            </ItemContainer>
            <ItemContainer>
              <EthereumIcon />
              {ethereumMarketCapPercentage}%
              <PercentageBar>
                <PercentageFiller percentage={ethereumMarketCapPercentage} />
              </PercentageBar>
            </ItemContainer>
          </Separator>
        </Wrapper>
      </Subnav>
    );
  }
}
