import { displayPositiveNumber } from '../../Utils';
import {
  AllTimeContainer,
  AllTimeInfoText,
  CoinPrice,
  CoinPriceChange,
  CoinPriceContainer,
  GreenArrowUp,
  IconContainer,
  MiddleContentWrapper,
  RedArrowDown,
  TextContainer
} from './AllTimeInfo.styles';

export const AllTimeInfo = (props) => {
  const renderRedOrGreenArrow = (price) =>
    price < 0 ? <RedArrowDown /> : <GreenArrowUp />;
  var athDate = new Date(props.athDate).toGMTString();
  var atlDate = new Date(props.atlDate).toGMTString();

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
          <AllTimeInfoText>All Time High: ${props.athPrice}</AllTimeInfoText>
          <AllTimeInfoText>{athDate}</AllTimeInfoText>
        </TextContainer>
      </AllTimeContainer>
      <AllTimeContainer>
        <IconContainer>
          {renderRedOrGreenArrow(props.atlPriceChange)}
        </IconContainer>
        <TextContainer>
          <AllTimeInfoText>All Time Low: ${props.atlPrice}</AllTimeInfoText>
          <AllTimeInfoText>{atlDate}</AllTimeInfoText>
        </TextContainer>
      </AllTimeContainer>
    </MiddleContentWrapper>
  );
};
