import React, { useState, useEffect } from 'react';
import coinGecko from 'api/coinGecko';

import {
  ListWrapper,
  ListHead,
  MarketPrice,
  OwnedCoin,
  Image,
  ImageContainer,
  InfoContainer,
  ListBody,
  SmallText,
  GreenText,
  PercentageBar,
  FillPercentage,
  Text,
  CoinName,
  CoinSymbol,
  DeleteButton,
  ArrowIcon,
  Subtitle
} from './AssetsListRow.styles';
import { calculatePercentage, currencyFormat } from 'utils';
import getSymbolFromCurrency from 'currency-symbol-map';
import { CenterDiv, Loading } from 'assets';

export const AssetsListRow = (props) => {
  const [loading, setLoading] = useState(true);
  const [marketData, setMarketData] = useState({});

  const getMarketData = async (id) => {
    try {
      setLoading(true);
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
      setLoading(false);
      setMarketData(data.market_data);
    } catch (error) {
      setLoading(true);
    }
  };

  useEffect(() => {
    getMarketData(props.asset.id);
  }, [props.asset.id]);

  if (loading) return <Loading type="spin" />;

  const { name, symbol, image, purchasedAmount, purchasedDate, uniqueId } =
    props.asset;
  const { currency, removeAsset } = props;

  const currencySymbol = getSymbolFromCurrency(currency);
  const purchaseDateLocale = new Date(purchasedDate).toLocaleDateString();

  const marketvsvolumePercentage = calculatePercentage(
    marketData.market_cap?.usd,
    marketData.total_volume?.usd
  );

  const maxvscircSupplyPercentage = calculatePercentage(
    marketData.circulating_supply,
    marketData.max_supply
  );

  const priceChangeIn24h = marketData.price_change_24h_in_currency?.[currency];

  const currentPrice = marketData.current_price?.[currency];

  return (
    <ListWrapper>
      <ListHead>
        <ImageContainer>
          <Image src={image} alt={name} />
        </ImageContainer>
        <CoinName>
          {name}
          <CoinSymbol>({symbol})</CoinSymbol>
        </CoinName>
        <DeleteButton
          onClick={() => {
            removeAsset(uniqueId);
          }}
        >
          &times;
        </DeleteButton>
      </ListHead>
      <ListBody>
        <MarketPrice>
          <Subtitle>Market Price:</Subtitle>
          <InfoContainer>
            <SmallText>
              Current Price:
              <GreenText>
                {currencyFormat(currentPrice, currencySymbol)}
              </GreenText>
            </SmallText>
            <SmallText>
              Price Change 24h:
              <GreenText price={priceChangeIn24h?.toFixed(2)}>
                <ArrowIcon price={priceChangeIn24h} />
                {currencyFormat(priceChangeIn24h?.toFixed(2), currencySymbol)}
              </GreenText>
            </SmallText>
            <Text>
              Market Cap/Volume:
              <GreenText>{marketvsvolumePercentage.percentageA}%</GreenText>
              <PercentageBar>
                <FillPercentage
                  percentage={marketvsvolumePercentage.percentageA}
                />
              </PercentageBar>
              <Text>{marketvsvolumePercentage.percentageB}%</Text>
            </Text>
            <Text>
              Circ Supply/Max Supply:
              <GreenText>{maxvscircSupplyPercentage.percentageA}%</GreenText>
              <PercentageBar>
                <FillPercentage
                  percentage={maxvscircSupplyPercentage.percentageA}
                />
              </PercentageBar>
              <Text>{maxvscircSupplyPercentage.percentageB}%</Text>
            </Text>
          </InfoContainer>
        </MarketPrice>
        <OwnedCoin>
          <Subtitle>Your Coin:</Subtitle>
          <InfoContainer>
            <SmallText>
              Coin Amount:
              <GreenText>
                {currencyFormat(purchasedAmount, getSymbolFromCurrency(symbol))}
              </GreenText>
            </SmallText>
            <SmallText>
              Amount Value:
              <GreenText>
                {currencyFormat(purchasedAmount * currentPrice, currencySymbol)}
              </GreenText>
            </SmallText>
            <SmallText>
              Price change since purchase:
              <GreenText price={currentPrice - purchasedAmount}>
                <ArrowIcon price={currentPrice - purchasedAmount} />
                {currencyFormat(currentPrice - purchasedAmount, currencySymbol)}
              </GreenText>
            </SmallText>
            <SmallText>
              Purchase Date:
              <GreenText>{purchaseDateLocale}</GreenText>
            </SmallText>
          </InfoContainer>
        </OwnedCoin>
      </ListBody>
    </ListWrapper>
  );
};
