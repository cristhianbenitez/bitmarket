import styled from 'styled-components';
import { devices } from 'utils';

const CenterItem = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MiddleContentWrapper = styled.div`
  width: 100%;
  background: #2c2d33;
  border-radius: 12px;
  padding: 1.5em 3em;
  margin-bottom: 1em;
  @media ${devices.tablet} {
    background: ${({ theme }) => theme.foreground};
  }
  @media ${devices.laptop} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const CoinPrice = styled.p`
  display: flex;
  font-size: 2rem;
  font-weight: 400;
  padding-right: 0.5em;
  @media ${devices.laptopL} {
    font-size: 2.2rem;
  }
`;

export const CoinPriceChange = styled.p<{ priceChange: number }>`
  ${CenterItem}
  color: ${(props) => (props.priceChange < 0 ? '#FE1040' : '#00FC2A')};
`;

export const CoinPriceContainer = styled.div`
  ${CenterItem}
  padding-bottom: .5em;
`;

export const CoinPricesDataText = styled.p`
  font-size: 0.7rem;
  text-align: start;

  @media ${devices.laptopL} {
    font-size: 1.2rem;
  }
`;

export const AllTimeContainer = styled.div`
  margin-top: 1em;
  ${CenterItem}
`;

export const TextContainer = styled.div``;

export const IconContainer = styled.i`
  ${CenterItem}
  margin-right: 0.5em;
`;
