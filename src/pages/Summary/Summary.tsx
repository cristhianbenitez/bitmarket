import React from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
import { Loading, CenterDiv } from 'assets';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getSummaryData } from 'store/reducers/summary/summaryDataSlice';

import {
  CoinPricesData,
  CoinInfo,
  DescriptionInfo,
  MarketDataInfo,
  LinkContainer,
  CurrencyConverter
} from 'components';

import {
  Container,
  CoinLinksContainer,
  Link,
  TopPageContent,
  BottomPageContent,
  LeftContent,
  MiddleContent,
  RightContent,
  Subtitle,
  Background
} from './Summary.styles';
import { ISummaryData } from './Summary.types';

export const Summary = () => {
  const value = useAppSelector((state) => state.currency);
  let { id } = useParams<string>();
  const { isLoading, hasError, summaryData } = useAppSelector(
    (state) => state.summaryData
  );
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (id) dispatch(getSummaryData(id));
  }, [id]);

  const {
    name,
    image,
    market_data: marketData,
    links,
    symbol,
    description
  }: ISummaryData = summaryData;
  const currency = value;
  const currencySymbol = getSymbolFromCurrency(value);

  if (hasError) return <CenterDiv>This Page does not exist</CenterDiv>;

  if (isLoading)
    return (
      <CenterDiv>
        <Loading type="spin" />
      </CenterDiv>
    );
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
              priceChange={marketData.price_change_24h_in_currency[currency]}
              currentPrice={marketData.current_price[currency]}
              athPrice={marketData.ath[currency]}
              athDate={marketData.ath_date[currency]}
              athPriceChange={marketData.ath_change_percentage[currency]}
              atlPrice={marketData.atl[currency]}
              atlDate={marketData.atl_date[currency]}
              atlPriceChange={marketData.atl_change_percentage[currency]}
            />
          </MiddleContent>
          <RightContent>
            <MarketDataInfo
              currencySymbol={currencySymbol}
              symbol={symbol}
              marketCap={marketData.market_cap[currency]}
              fullyDilutedVal={marketData.fully_diluted_valuation[currency]}
              totalVolume={marketData.total_volume[currency]}
              circulatingSupply={marketData.circulating_supply}
              maxSupply={marketData.max_supply}
            />
          </RightContent>
        </TopPageContent>
        <Subtitle>Description</Subtitle>
        <BottomPageContent>
          <DescriptionInfo text={description.en} />
          <CoinLinksContainer>
            <Link>
              <LinkContainer
                urlLink={`${links.blockchain_site[0]}`}
                extraIcon
              />
            </Link>
            <Link>
              <LinkContainer
                urlLink={`${links.blockchain_site[1]}`}
                extraIcon
              />
            </Link>
            <Link>
              <LinkContainer
                urlLink={`${links.blockchain_site[2]}`}
                extraIcon
              />
            </Link>
          </CoinLinksContainer>
          <CurrencyConverter
            coinSymbol={symbol}
            currency={value}
            coinPrice={marketData.current_price[currency]}
          />
        </BottomPageContent>
      </Container>
      <Background />
    </>
  );
};
