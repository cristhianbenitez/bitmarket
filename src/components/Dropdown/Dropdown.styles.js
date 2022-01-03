import styled from 'styled-components';
import ArrowDown from 'assets/ArrowDown.png';
import ArrowUp from 'assets/ArrowUp.png';
import Currency from 'assets/CurrencyIcon.svg';

export const Input = styled.input`
  width: 100%;
  height: 32px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.general};
  background: transparent;
  border-radius: 8px;
  padding: 2.1em 0.5em;
  border: none;
  text-transform: uppercase;
  &:focus {
    outline: none;
  }
`;

export const DropDownContainer = styled.div`
  width: 100px;
  background: ${({ theme }) => theme.background};
  border-radius: 6px;
  margin-right: 1.5em;
  padding: 0 0.5em;
`;

export const DropDownHeader = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

export const DropDownList = styled.ul`
  list-style: none;
  position: absolute;
  background: ${({ theme }) => theme.foreground};
  max-width: 100%;
  width: 100%;
  max-height: 220px;
  border-radius: 6px;
  border: none;
  box-sizing: border-box;
  overflow-y: auto;
  z-index: 999;
  max-width: 100px;
  padding: 0;
  margin-top: 0.5em;

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
  color: ${({ theme }) => theme.general};
  background: ${({ theme }) => theme.foreground};
  padding: 0.5em 0;
  width: 100%;
  box-sizing: border-box;
  text-transform: uppercase;

  cursor: pointer;
  overflow: auto;
  &:hover {
    background: ${({ theme }) => theme.background};
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
