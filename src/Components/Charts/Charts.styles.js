import styled from 'styled-components';

export const ChartsWrapper = styled.div`
  margin: 0 auto;
  width: 40%;
  max-width: 600px;
  height: 250px;
  background: #191b1f;
  border-radius: 8px;
  padding: 1em;
  &:first-child {
    margin-right: 3em;
  }
`;
export const CoinInfo = styled.div`
  text-align: start;
  position: absolute;
`;

export const CoinInfoTitle = styled.p`
  font-weight: 300;
`;

export const CoinInfoValue = styled.p`
  font-size: 1.75rem;
`;
export const CoinInfoDate = styled.p``;
