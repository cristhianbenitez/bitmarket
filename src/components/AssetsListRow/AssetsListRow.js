import React, { Component } from 'react';
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

export class AssetsListRow extends Component {
  state = {
    isLoading: true,
    assetData: {},
    priceData: 0
  };

  getData = async () => {
    this.setState({ isLoading: true });
    const id = this.props.id;
    const purchasedDate = this.props.purchaseDate
      .split('-')
      .reverse()
      .join('-');
    const [assetData, priceData] = await Promise.all([
      coinGecko.get(`/coins/${id}`, {
        params: {
          market_data: 'true',
          localization: 'false',
          tickers: 'false',
          interval: 'daily',
          community_data: 'false',
          developer_data: 'false',
          sparkline: 'false'
        }
      }),
      coinGecko.get(`/coins/${id}/history`, {
        params: {
          date: purchasedDate,
          localization: 'false'
        }
      })
    ]);

    const historicPriceData = priceData.data.market_data.current_price.usd;

    this.setState({
      isLoading: false,
      assetData: assetData.data,
      priceData: historicPriceData
    });
  };

  componentDidMount = () => {
    this.getData();
  };

  render() {
    if (this.state.isLoading)
      return (
        <CenterDiv>
          <Loading type="spin" />
        </CenterDiv>
      );

    const { currency } = this.props;

    const currencySymbol = getSymbolFromCurrency(currency);

    const {
      name,
      symbol,
      market_data: marketData,
      image
    } = this.state.assetData;

    const purchaseDateLocale = new Date(
      this.props.purchaseDate
    ).toLocaleDateString();

    const marketvsvolumePercentage = calculatePercentage(
      marketData.market_cap.usd,
      marketData.total_volume.usd
    );

    const maxvscircSupplyPercentage = calculatePercentage(
      marketData.circulating_supply,
      marketData.max_supply
    );

    const priceChangeIn24h =
      marketData.price_change_24h_in_currency?.[currency];

    const currentPrice = marketData.current_price?.[currency];

    const purchasedPrice = this.state.priceData;

    return (
      <ListWrapper>
        <ListHead>
          <ImageContainer>
            <Image src={image.small} alt={name} />
          </ImageContainer>
          <CoinName>
            {name}
            <CoinSymbol>({symbol})</CoinSymbol>
          </CoinName>
          <DeleteButton onClick={() => this.props.removeAsset(this.props.id)}>
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
                <GreenText price={priceChangeIn24h.toFixed(2)}>
                  <ArrowIcon price={priceChangeIn24h} />
                  {currencyFormat(priceChangeIn24h.toFixed(2), currencySymbol)}
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
                  {currencyFormat(
                    this.props.coinAmount,
                    getSymbolFromCurrency(symbol)
                  )}
                </GreenText>
              </SmallText>
              <SmallText>
                Amount Value:
                <GreenText>
                  {currencyFormat(
                    this.props.coinAmount * currentPrice,
                    currencySymbol
                  )}
                </GreenText>
              </SmallText>
              <SmallText>
                Price change since purchase:
                <GreenText price={currentPrice - purchasedPrice}>
                  <ArrowIcon price={currentPrice - purchasedPrice} />
                  {currencyFormat(
                    currentPrice - purchasedPrice,
                    currencySymbol
                  )}
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
  }
}
