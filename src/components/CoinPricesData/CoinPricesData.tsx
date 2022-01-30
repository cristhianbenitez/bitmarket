import { PriceArrow } from 'assets';
import { displayPositiveNumber, formattedNumber } from 'utils';
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

interface CoinPricesDataProps {
  athDate: string;
  athPrice: number;
  athPriceChange: number;
  atlDate: string;
  atlPrice: number;
  atlPriceChange: number;
  currencySymbol?: string;
  currentPrice: number;
  priceChange: number;
}

export const CoinPricesData = (props: CoinPricesDataProps) => {
  const athDate = new Date(props.athDate).toUTCString();

  const atlDate = new Date(props.atlDate).toUTCString();

  const priceChangePercentage = (props.priceChange / props.currentPrice) * 100;

  return (
    <MiddleContentWrapper>
      <CoinPriceContainer>
        <CoinPrice>
          {props.currencySymbol}
          {formattedNumber(props.currentPrice, `10,000.00`)}
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
