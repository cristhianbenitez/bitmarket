import React, { Component } from 'react';
import coinGecko from 'api/coinGecko';
import { withRouter } from 'helpers';

import {
  Background,
  BottomPageContent,
  CoinLinksContainer,
  Container,
  LeftContent,
  LeftLink,
  MiddleContent,
  MiddleLink,
  RightContent,
  RightLink,
  Subtitle,
  TopPageContent
} from './CoinInformation.styles';

import {
  CoinPricesData,
  CoinInfo,
  DescriptionInfo,
  IntervalDropdown,
  MarketDataInfo,
  LinkContainer,
  CurrencyConverter
} from 'components';

class CoinInformation extends Component {
  state = {
    isLoading: false,
    coinInfo: []
  };

  getCoinInformation = async () => {
    const id = this.props.params.id;
    this.setState({ ...this.state, isLoading: true });
    const { data } = await coinGecko.get(`/coins/${id}`, {
      params: {
        market_data: 'true',
        localization: 'false',
        tickers: 'false',
        interval: 'daily',
        community_data: 'false',
        developer_data: 'false',
        sparkline: 'false'
      }
    });

    this.setState({
      ...this.state,
      isLoading: false,
      coinInfo: data
    });
  };

  componentDidMount = () => {
    this.getCoinInformation();
  };
  render() {
    const { name, market_data, image, links, symbol, description } =
      this.state.coinInfo;

    return this.state.isLoading ? (
      <div>Loading...</div>
    ) : (
      <>
        <Container>
          <Subtitle>Your Summary</Subtitle>
          <TopPageContent>
            <LeftContent>
              <CoinInfo
                coinImg={image?.small}
                coinName={name}
                coinSymbol={symbol?.toUpperCase()}
                coinLink={links?.homepage[0]}
              />
            </LeftContent>
            <MiddleContent>
              <CoinPricesData
                priceChange={market_data?.price_change_24h}
                currentPrice={market_data?.current_price?.usd}
                athPrice={market_data?.ath?.usd}
                athDate={market_data?.ath_date?.usd}
                athPriceChange={market_data?.ath_change_percentage?.usd}
                atlPrice={market_data?.atl?.usd}
                atlDate={market_data?.atl_date?.usd}
                atlPriceChange={market_data?.atl_change_percentage?.usd}
              />
            </MiddleContent>
            <RightContent>
              <MarketDataInfo
                marketCap={market_data?.market_cap.usd}
                fullyDilutedVal={market_data?.fully_diluted_valuation.usd}
                totalVolume={market_data?.total_volume.usd}
                circulatingSupply={market_data?.circulating_supply}
                maxSupply={market_data?.max_supply}
              />
            </RightContent>
          </TopPageContent>
          <Subtitle>Description</Subtitle>
          <BottomPageContent>
            <DescriptionInfo text={description?.en} />
            <CoinLinksContainer>
              <LeftLink>
                <LinkContainer
                  urlLink={`${links?.blockchain_site[0]}`}
                  extraIcon
                />
              </LeftLink>
              <MiddleLink>
                <LinkContainer
                  urlLink={`${links?.blockchain_site[1]}`}
                  extraIcon
                />
              </MiddleLink>
              <RightLink>
                <LinkContainer
                  urlLink={`${links?.blockchain_site[2]}`}
                  extraIcon
                />
              </RightLink>
            </CoinLinksContainer>
            <IntervalDropdown />
            <CurrencyConverter
              coinSymbol={symbol?.toUpperCase()}
              coinPrice={market_data?.current_price?.usd}
            />
          </BottomPageContent>
        </Container>
        <Background />
      </>
    );
  }
}

export const WrappedCoinInformation = withRouter(CoinInformation);
