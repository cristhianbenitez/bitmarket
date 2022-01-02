import React, { Component } from 'react';
import coinGecko from 'api/coinGecko';

import {
  RowContainer,
  LeftContent,
  RightContent,
  Image,
  ImageContainer,
  InfoContainer,
  TopContent,
  BottomContent,
  SmallText,
  GreenText,
  PercentageBar,
  FillPercentage,
  WhiteText,
  CoinName,
  CoinSymbol,
  DeleteButton,
  RedArrowDown,
  GreenArrowUp
} from './AssetsListRow.styles';
import { calculatePercentage, currencyFormat } from 'utils';
import getSymbolFromCurrency from 'currency-symbol-map';

export class AssetsListRow extends Component {
  state = {
    isLoading: false,
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

    const historicPriceData = priceData?.data?.market_data?.current_price.usd;

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
      marketData?.market_cap.usd,
      marketData?.total_volume.usd
    );

    const maxvscircSupplyPercentage = calculatePercentage(
      marketData?.circulating_supply,
      marketData?.max_supply
    );

    const directionIndicator = (price) => {
      const isPositive = price > 0;
      return isPositive ? <GreenArrowUp /> : <RedArrowDown />;
    };

    const currency = `${this.props.currency}`;

    const currencySymbol = getSymbolFromCurrency(this.props.currency);

    if (this.state.isLoading) return <div>Loading...</div>;

    return (
      <RowContainer>
        <LeftContent>
          <ImageContainer>
            <Image src={image?.small} alt={name} />
          </ImageContainer>
          <CoinName>
            {name}
            <CoinSymbol>({symbol})</CoinSymbol>
          </CoinName>
          <DeleteButton onClick={() => this.props.removeAsset(this.props.id)}>
            &times;
          </DeleteButton>
        </LeftContent>
        <RightContent>
          <TopContent>
            <SmallText>Market Price:</SmallText>
            <InfoContainer>
              <SmallText>
                Current Price:
                <GreenText>
                  {currencyFormat(
                    marketData?.price_change_24h_in_currency?.[currency],
                    currencySymbol
                  )}
                </GreenText>
              </SmallText>
              <SmallText>
                Price Change 24h:
                <GreenText
                  price={marketData?.price_change_24h_in_currency?.[
                    currency
                  ].toFixed(2)}
                >
                  {directionIndicator(
                    marketData?.price_change_24h_in_currency?.[currency]
                  )}
                  {currencySymbol}
                  {marketData?.price_change_24h_in_currency?.[currency].toFixed(
                    2
                  )}
                </GreenText>
              </SmallText>
              <WhiteText>
                Market Cap/Volume:
                <GreenText>{marketvsvolumePercentage.percentageA}%</GreenText>
                <PercentageBar>
                  <FillPercentage
                    percentage={marketvsvolumePercentage.percentageA}
                  />
                </PercentageBar>
                <WhiteText>{marketvsvolumePercentage.percentageB}%</WhiteText>
              </WhiteText>
              <WhiteText>
                Circ Supply/Max Supply:
                <GreenText>{maxvscircSupplyPercentage.percentageA}%</GreenText>
                <PercentageBar>
                  <FillPercentage
                    percentage={maxvscircSupplyPercentage.percentageA}
                  />
                </PercentageBar>
                <WhiteText>{maxvscircSupplyPercentage.percentageB}%</WhiteText>
              </WhiteText>
            </InfoContainer>
          </TopContent>
          <BottomContent>
            <SmallText>Your Coin:</SmallText>
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
                    this.props.coinAmount *
                      marketData?.current_price?.[currency],
                    currencySymbol
                  )}
                </GreenText>
              </SmallText>
              <SmallText>
                Price change since purchase:
                <GreenText
                  price={
                    marketData?.current_price?.[currency] - this.state.priceData
                  }
                >
                  {directionIndicator(
                    marketData?.current_price?.[currency] - this.state.priceData
                  )}
                  {currencyFormat(
                    marketData?.current_price?.[currency] -
                      this.state.priceData,
                    currencySymbol
                  )}
                </GreenText>
              </SmallText>
              <SmallText>
                Purchase Date:
                <GreenText>{purchaseDateLocale}</GreenText>
              </SmallText>
            </InfoContainer>
          </BottomContent>
        </RightContent>
      </RowContainer>
    );
  }
}
