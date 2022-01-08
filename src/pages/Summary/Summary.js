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
} from './Summary.styles';

import {
  CoinPricesData,
  CoinInfo,
  DescriptionInfo,
  IntervalDropdown,
  MarketDataInfo,
  LinkContainer,
  CurrencyConverter
} from 'components';
import getSymbolFromCurrency from 'currency-symbol-map';
import { Loading, CenterDiv } from 'assets';

class Summary extends Component {
  state = {
    isLoading: true,
    hasError: false,
    coinInfo: []
  };

  getSummary = async () => {
    const id = this.props.params.id;
    this.setState({ isLoading: true });
    try {
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
        isLoading: false,
        coinInfo: data
      });
    } catch (error) {
      this.setState({
        hasError: true
      });
    }
  };

  componentDidMount = () => {
    this.getSummary();
  };
  render() {
    if (this.state.hasError)
      return <CenterDiv>This Page does not exist</CenterDiv>;

    if (this.state.isLoading)
      return (
        <CenterDiv>
          <Loading type="spin" />
        </CenterDiv>
      );

    const { name, market_data, image, links, symbol, description } =
      this.state.coinInfo;

    const currency = this.props.currency;

    const currencySymbol = getSymbolFromCurrency(this.props.currency);

    return (
      <>
        <Container>
          <Subtitle>Your Summary</Subtitle>
          <TopPageContent>
            <LeftContent>
              <CoinInfo
                coinImg={image.small}
                coinName={name}
                coinSymbol={symbol.toUpperCase()}
                coinLink={links.homepage[0]}
              />
            </LeftContent>
            <MiddleContent>
              <CoinPricesData
                currencySymbol={currencySymbol}
                priceChange={
                  market_data.price_change_24h_in_currency?.[currency]
                }
                currentPrice={market_data.current_price?.[currency]}
                athPrice={market_data.ath?.[currency]}
                athDate={market_data.ath_date?.[currency]}
                athPriceChange={market_data.ath_change_percentage?.[currency]}
                atlPrice={market_data.atl?.[currency]}
                atlDate={market_data.atl_date?.[currency]}
                atlPriceChange={market_data.atl_change_percentage?.[currency]}
              />
            </MiddleContent>
            <RightContent>
              <MarketDataInfo
                currencySymbol={currencySymbol}
                symbol={symbol}
                marketCap={market_data.market_cap?.[currency]}
                fullyDilutedVal={
                  market_data.fully_diluted_valuation?.[currency]
                }
                totalVolume={market_data.total_volume?.[currency]}
                circulatingSupply={market_data.circulating_supply}
                maxSupply={market_data.max_supply}
              />
            </RightContent>
          </TopPageContent>
          <Subtitle>Description</Subtitle>
          <BottomPageContent>
            <DescriptionInfo text={description.en} />
            <CoinLinksContainer>
              <LeftLink>
                <LinkContainer
                  urlLink={`${links.blockchain_site[0]}`}
                  extraIcon
                />
              </LeftLink>
              <MiddleLink>
                <LinkContainer
                  urlLink={`${links.blockchain_site[1]}`}
                  extraIcon
                />
              </MiddleLink>
              <RightLink>
                <LinkContainer
                  urlLink={`${links.blockchain_site[2]}`}
                  extraIcon
                />
              </RightLink>
            </CoinLinksContainer>
            <IntervalDropdown />
            <CurrencyConverter
              coinSymbol={symbol.toUpperCase()}
              coinPrice={market_data.current_price?.[currency]}
            />
          </BottomPageContent>
        </Container>
        <Background />
      </>
    );
  }
}

export const WrappedSummary = withRouter(Summary);
