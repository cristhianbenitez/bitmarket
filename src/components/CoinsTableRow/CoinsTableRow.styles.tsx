import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PriceArrow } from 'assets';
import { devices } from 'utils';

interface IPercentage {
  [key: string]: string;
}

export const TableData = styled.td`
  font-size: 0.8rem;
  text-align: start;
  padding-right: 1em;
  @media ${devices.desktop} {
    font-size: 0.9rem;
    padding: 1.25em 1em;
  }
`;
export const TableRow = styled.tr`
  border-bottom: 2px solid ${({ theme }) => theme.background};
  &:last-child {
    border-bottom: none;
  }
  & > td {
    &:first-child {
      display: none;
    }
    &:last-child {
      width: 0;
    }
  }
  @media ${devices.desktop} {
    & > td:first-child {
      display: table-cell;
    }
  }
`;
export const TableBody = styled.tbody``;

export const ValuesContainer = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

export const Value = styled.span<{ colors: string }>`
  display: flex;
  align-items: center;
  color: ${(props) => props.colors};
`;

export const PercentageBarContainer = styled.div``;

export const PercentageBar = styled.div<{ colors: string }>`
  width: 95%;
  height: 9px;
  background: ${(props) => props.colors};
  border-radius: 12px;
  z-index: 1;
  margin-left: 0.5em;
`;

export const PercentageBarFill = styled.div<{
  colors: string;
  percentage: IPercentage;
}>`
  background: #ffb528;
  z-index: 2;
  border-radius: 12px;
  height: 100%;
  background: ${(props) => props.colors};
  width: ${(props) => `${props.percentage.percentageA}%`};
`;

export const BulletCircle = styled.div<{ colors: string }>`
  width: 7px;
  height: 7px;
  border-radius: 100%;
  background: #fff;
  margin-right: 0.5em;
  background: ${(props) => props.colors};
`;

export const PriceChangePercentage = styled.td<{
  price: number;
}>`
  font-size: 0.8rem;
  color: ${(props) => (props.price > 0 ? '#00FC2A' : '#FE1040')};
  padding-right: 1em;
  @media ${devices.desktop} {
    font-size: 0.9rem;
  }
`;

export const CenterDiv = styled.div`
  display: flex;
  align-items: center;
`;
export const ArrowIcon = styled(PriceArrow)`
  height: 100%;
  width: 1.3em;
  padding: 0 0.25em;
  top: 50%;
  left: 50%; ;
`;

export const CoinIcon = styled.img`
  height: 30px;
  width:30px
  object-fit: cover;
  margin-right: 1em;
  border-radius: 100%;
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.general};
  padding-right: 4em;
`;

export const CoinName = styled.p`
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  @media ${devices.desktop} {
    font-size: 1rem;
    flex-direction: row;
  }
`;
export const Symbol = styled.span`
  text-transform: uppercase;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: #ffff;
  }
`;

export const SmallChartContainer = styled.div`
  width: 12em;
  height: 50px;
`;

export const CurrencySymbol = styled.span`
  padding-right: 2px;
`;
