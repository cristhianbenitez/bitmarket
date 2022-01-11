import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from 'assets/Icons/GraphsArrow.svg';
import { devices } from 'utils';

export const Legend = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 85%;
  @media ${devices.tablet} {
    width: unset;
  }
`;
export const CoinInfo = styled.div`
  text-align: start;
  padding-left: 0.5em;
`;

export const CoinInfoTitle = styled.p`
  font-weight: 300;
`;

export const CoinInfoValue = styled.p`
  font-size: 1.3rem;
  @media ${devices.tablet} {
    font-size: 1.75rem;
  }
  @media ${devices.desktop} {
    font-size: 2.35rem;
  }
`;

export const CoinInfoDate = styled.p``;

export const ArrowsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5em;
  width: 60px;
  @media ${devices.tablet} {
    display: none;
  }
`;

export const Arrow = styled(({ left, ...rest }) => <ArrowIcon {...rest} />)`
  cursor: pointer;
  overflow: auto;
  transform: ${({ left }) => left && 'rotate(180deg)'};
`;
