import ArrowDown from 'Assets/ArrowDown.png';
import ArrowUp from 'Assets/ArrowUp.png';
import styled from 'styled-components';

export const IntervalDropdownWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 2em;
  align-items: center;
`;

export const DropDownContainer = styled.div`
  background: #2c2d33;
  border-radius: 12px 0 0 12px;
  padding: 1em;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

export const DropDownHeader = styled.div`
  cursor: pointer;
  padding-right: 2em;
  height: 100%;
`;

export const DropDownList = styled.ul`
  list-style: none;
  position: absolute;
  padding: 0;
  margin-top: 3em;
  background: #191b1f;
  width: 130px;
  border-radius: 6px;
  height: auto;
  overflow: auto;
  -webkit-transition: height 0.3s ease;
  transition: height 0.3s ease;
  margin-left: -0.8em;
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
  padding: 1em;
  text-align: start;
  cursor: pointer;
  overflow: auto;
  &:hover {
    background: #2c2f36;
  }
`;

export const SelectButton = styled.div`
  padding: 1em 2em;
  background-color: #06d554;
  border-radius: 0 12px 12px 0;
  cursor: pointer;
`;

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
