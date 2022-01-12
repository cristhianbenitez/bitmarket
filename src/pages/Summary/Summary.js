import React, { useState, useEffect } from 'react';
import coinGecko from 'api/coinGecko';
import { withRouter } from 'helpers';

import {
  Background,
  BottomPageContent,
  CoinLinksContainer,
  Container,
  LeftContent,
  Link,
  MiddleContent,
  RightContent,
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
import { useParams } from 'react-router-dom';

export const Summary = (props) => {
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [coinInfo, setCoinInfo] = useState({});
  let { id } = useParams();

  const getSummary = async () => {
    setLoading(true);
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
      setCoinInfo(data);
      setLoading(false);
    } catch (error) {
      setHasError(true);
    }
  };

  useEffect(() => {
    getSummary();
  }, []);

  const { name, market_data, image, links, symbol, description } = coinInfo;

  const currency = props.currency;

  const currencySymbol = getSymbolFromCurrency(props.currency);

  if (hasError) return <CenterDiv>This Page does not exist</CenterDiv>;

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
              coinSymbol={symbol.toUpperCase()}
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
            coinSymbol={symbol.toUpperCase()}
            coinPrice={market_data.current_price?.[currency]}
          />
        </BottomPageContent>
      </Container>
      <Background />
    </>
  );
};
