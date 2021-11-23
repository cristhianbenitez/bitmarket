import styled from 'styled-components';
import RedArrow from '../../Assets/RedArrow.png';
import ArrowUp from '../../Assets/ArrowUp.png';
export const TableData = styled.td`
  padding: 1.25em 1em;
  text-align: start;
`;
export const TableRow = styled.tr`
  border-bottom: 1px solid #707070;
  display: table-row;
  outline: 0;
  vertical-align: middle;
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
export const RedArrowDown = styled.img.attrs({
  src: `${RedArrow}`
})`
  padding: 0 0.25em;
  top: 50%;
  transform: translateY(-50%);
`;
export const GreenArrowUp = styled.img.attrs({
  src: `${ArrowUp}`
})`
  padding: 0 0.25em;
  top: 50%;
  transform: translateY(-50%);
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
`;
