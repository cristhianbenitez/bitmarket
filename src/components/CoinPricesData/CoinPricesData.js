import { PriceArrow } from 'assets';
import { displayPositiveNumber } from 'utils';
import {
  AllTimeContainer,
  CoinPricesDataText,
  CoinPrice,
  CoinPriceChange,
  CoinPriceContainer,
  IconContainer,
  MiddleContentWrapper,
  TextContainer
} from './CoinPricesData.styles';

export const CoinPricesData = (props) => {
  const athDate = new Date(props.athDate).toGMTString();

  const atlDate = new Date(props.atlDate).toGMTString();

  const priceChangePercentage =
    (props?.priceChange / props?.currentPrice) * 100;

  return (
    <MiddleContentWrapper>
      <CoinPriceContainer>
        <CoinPrice>
          {props.currencySymbol}
          {props.currentPrice}
        </CoinPrice>
        <CoinPriceChange priceChange={priceChangePercentage}>
          <IconContainer>
            <PriceArrow price={priceChangePercentage} />
          </IconContainer>
          {displayPositiveNumber(priceChangePercentage)}%
        </CoinPriceChange>
      </CoinPriceContainer>
      <AllTimeContainer>
        <IconContainer>
          <PriceArrow price={props.athPriceChange} />
        </IconContainer>
        <TextContainer>
          <CoinPricesDataText>
            All Time High: ${props.athPrice}
          </CoinPricesDataText>
          <CoinPricesDataText>{athDate}</CoinPricesDataText>
        </TextContainer>
      </AllTimeContainer>
      <AllTimeContainer>
        <IconContainer>
          <PriceArrow price={props.atlPriceChange} />
        </IconContainer>
        <TextContainer>
          <CoinPricesDataText>
            All Time Low: ${props.atlPrice}
          </CoinPricesDataText>
          <CoinPricesDataText>{atlDate}</CoinPricesDataText>
        </TextContainer>
      </AllTimeContainer>
    </MiddleContentWrapper>
  );
};
