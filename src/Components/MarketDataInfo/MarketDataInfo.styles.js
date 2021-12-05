import Icon from 'Assets/PlusIcon.png';
import styled from 'styled-components';
export const MarketDataList = styled.ul`
  margin: 2em 0;
  margin-left: 3em;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
`;

export const MarketDataText = styled.p`
  font-size: 1rem;
  text-align: start;
`;
export const MarketDataItem = styled.li`
  display: flex;
  align-items: center;
  margin-right: 1em;
`;
export const MarketDataTitle = styled.span`
  font-weight: 500;
  margin-right: 0.25em;
`;

export const PlusIcon = styled.img.attrs({
  src: `${Icon}`
})`
  padding-right: 1em;
`;
