import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PriceArrow } from 'assets';

export const TableData = styled.td`
  padding: 1.25em 1em;
  text-align: start;
`;
export const TableRow = styled.tr`
  border-bottom: 2px solid ${({ theme }) => theme.background};
  &:last-child {
    border-bottom: none;
  }
`;
export const TableBody = styled.tbody``;

export const ValuesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Value = styled.span`
  display: flex;
  align-items: center;
  color: ${(props) => props.colors};
`;

export const PercentageBarContainer = styled.div``;

export const PercentageBar = styled.div`
  width: 95%;
  height: 9px;
  background: ${(props) => props.colors};
  border-radius: 12px;
  z-index: 1;
  margin-left: 0.5em;
`;

export const PercentageBarFill = styled.div`
  background: #ffb528;
  z-index: 2;
  border-radius: 12px;
  height: 100%;
  background: ${(props) => props.colors};
  width: ${(props) => `${props.percentage.percentageA}%`};
`;

export const BulletCircle = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 100%;
  background: #fff;
  margin-right: 0.5em;
  background: ${(props) => props.colors};
`;

export const PriceChangePercentage = styled.td`
  color: ${(props) => (props.price > 0 ? '#00FC2A' : '#FE1040')};
`;

export const CenterDiv = styled.div`
  display: flex;
  align-items: center;
`;
export const ArrowIcon = styled(PriceArrow)`
  padding: 0 0.25em;
  top: 50%;
  left: 50%; ;
`;

export const CoinIcon = styled.img`
  width: 33px;
  height: 33px;
  margin-right: 1em;
  border-radius: 100%;
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.general};
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
  width: 125px;
  height: 50px;
  display: flex;
  align-items: center;
`;
