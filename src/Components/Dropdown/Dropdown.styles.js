import styled from 'styled-components';
import Currency from '../../Assets/CurrencyIcon.svg';

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
