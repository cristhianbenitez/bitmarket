import { ReactComponent as Plus } from 'assets/Icons/Plus.svg';
import styled from 'styled-components';
import { devices } from 'utils';

export const MarketDataList = styled.ul`
  background: #2c2d33;
  border-radius: 12px;
  padding: 1em;
  list-style: none;
  @media ${devices.tablet} {
    background: ${({ theme }) => theme.foreground};
  }
  @media ${devices.laptop} {
    margin: 2em 0;
    display: flex;
    flex-direction: column;
    padding-left: 2em;
    height: 100%;
  }
`;

export const MarketDataText = styled.p`
  display: flex;
  flex-direction: column;
  text-align: start;
  padding-left: 0rem;
`;

export const MarketDataItem = styled.li`
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  width: 100%;
  &:last-child {
    margin-bottom: 0;
  }
  &:nth-child(3) {
    margin-bottom: 2em;
  }
  @media ${devices.laptopL} {
    font-size: 0.9rem;
  }
`;

export const MarketDataTitle = styled.span`
  font-weight: 500;
  margin-right: 0.25em;
`;

export const PlusIcon = styled(Plus)`
  height: 17.5px;
  max-height: 20px;
  padding-right: 0.8em;
  @media ${devices.laptopL} {
    padding-right: 0.5em;
  }
`;
