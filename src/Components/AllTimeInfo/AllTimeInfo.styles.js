import ArrowUp from 'Assets/ArrowUp.png';
import ArrowDown from 'Assets/RedArrow.png';
import styled from 'styled-components';

const CenterItem = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MiddleContentWrapper = styled.div`
  margin: auto;
`;

export const CoinPrice = styled.h2`
  margin-top: 0;
  font-weight: 500;
  font-size: 2.75rem;
  margin-right: 0.5em;
`;
export const CoinPriceChange = styled.p`
  ${CenterItem}
  color: ${(props) => (props.priceChange < 0 ? '#FE1040' : '#00FC2A')};
`;

export const CoinPriceContainer = styled.div`
  ${CenterItem}
`;
export const AllTimeInfoText = styled.p`
  font-size: 1.125rem;
  text-align: start;
`;

export const AllTimeContainer = styled.div`
  margin-top: 1em;
  ${CenterItem}
`;

export const TextContainer = styled.div``;

export const GreenArrowUp = styled.img.attrs({
  src: `${ArrowUp}`
})``;
export const RedArrowDown = styled.img.attrs({
  src: `${ArrowDown}`
})``;

export const IconContainer = styled.i`
  ${CenterItem}
  margin-right: 0.5em;
`;
