import React from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
import { Loading, CenterDiv } from 'assets';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getSummaryData } from 'store/reducers/summary/summaryDataSlice';
import coinGecko from 'api/coinGecko';
import {
  CoinPricesData,
  CoinInfo,
  DescriptionInfo,
  IntervalDropdown,
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

export const Summary = () => {
  const value = useAppSelector((state) => state.currency);
  let { id } = useParams<string>();
  const { loading, summaryData, error } = useAppSelector(
    (state) => state.summaryData
  );
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (id) dispatch(getSummaryData(id));
  }, [id]);

  const { name, market_data, image, links, symbol, description }: any =
    summaryData;

  const currency = value;
  const currencySymbol = getSymbolFromCurrency(value);

  if (error) return <CenterDiv>This Page does not exist</CenterDiv>;

  if (loading)
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
              coinImg={image?.small}
              coinName={name}
              coinSymbol={symbol?.toUpperCase()}
              coinLink={links?.homepage[0]}
            />
          </LeftContent>
          <MiddleContent>
            <CoinPricesData
              currencySymbol={currencySymbol}
              priceChange={market_data.price_change_24h_in_currency?.[currency]}
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
              fullyDilutedVal={market_data.fully_diluted_valuation?.[currency]}
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
          <IntervalDropdown />
          <CurrencyConverter
            coinSymbol={symbol}
            currency={value}
            coinPrice={market_data?.current_price?.[currency]}
          />
        </BottomPageContent>
      </Container>
      <Background />
    </>
  );
};
