import styled from 'styled-components';
import Currency from '../../Assets/CurrencyIcon.svg';
import ArrowUp from '../../Assets/ArrowUp.png';
import ArrowDown from '../../Assets/ArrowDown.png';
export const DropDownContainer = styled.div`
  width: 100px;
  background: #2c2f36;
  border-radius: 6px;
  margin-right: 1.5em;
  padding-right: 0.5em;
`;
export const DropDownHeader = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;
export const DropDownList = styled.ul`
  color: blue;
  list-style: none;
  position: absolute;
  padding: 0;
  background: #191b1f;
  right: 92.5px;
  width: 100px;
  border-radius: 6px;
  height: 300px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2c2f36;
    outline: 1px solid #2c2f36;
    border-radius: 4px;
  }
`;
export const ListItem = styled.li`
  color: white;
  background: #191b1f;
  margin: 1em 1em;
  cursor: pointer;
  overflow: auto;
  &:hover {
    background: #2c2f36;
  }
`;
export const CurrencyIcon = styled.img.attrs({
  src: `${Currency}`
})``;

export const SelectionContainer = styled.div`
  display: flex;
`;
export const ArrowsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5em;
`;
export const ArrowUpIcon = styled.img.attrs({
  src: `${ArrowUp}`
})``;
export const ArrowDownIcon = styled.img.attrs({
  src: `${ArrowDown}`
})``;
