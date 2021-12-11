import { displayPositiveNumber } from 'utils';
import {
  AllTimeContainer,
  CoinPricesDataText,
  CoinPrice,
  CoinPriceChange,
  CoinPriceContainer,
  GreenArrowUp,
  IconContainer,
  MiddleContentWrapper,
  RedArrowDown,
  TextContainer
} from './CoinPricesData.styles';

export const CoinPricesData = (props) => {
  const renderRedOrGreenArrow = (price) =>
    price < 0 ? <RedArrowDown /> : <GreenArrowUp />;
  const athDate = new Date(props.athDate).toGMTString();
  const atlDate = new Date(props.atlDate).toGMTString();

  const priceChangePercentage =
    (props?.priceChange / props?.currentPrice) * 100;

  return (
    <MiddleContentWrapper>
      <CoinPriceContainer>
        <CoinPrice>${props.currentPrice}</CoinPrice>
        <CoinPriceChange priceChange={priceChangePercentage}>
          <IconContainer>
            {renderRedOrGreenArrow(priceChangePercentage)}
          </IconContainer>
          {displayPositiveNumber(priceChangePercentage)}
        </CoinPriceChange>
      </CoinPriceContainer>
      <AllTimeContainer>
        <IconContainer>
          {renderRedOrGreenArrow(props.athPriceChange)}
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
          {renderRedOrGreenArrow(props.atlPriceChange)}
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
