import styled from 'styled-components';
import { ReactComponent as DollarSign } from 'assets/Icons/DollarSign.svg';
import { devices } from 'utils';

export const Input = styled.input`
  display: none;
  @media ${devices.tablet} {
    display: block;
    width: 100%;
    padding: 0 auto;
    background: transparent;
    border: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.general};
    height: 25px;
    &:focus {
      outline: none;
    }
  }
`;

export const DropDownContainer = styled.div`
  display: none;
  @media ${devices.tablet} {
    display: flex;
    justify-content: center;
    width: 90px;
    background: ${({ theme }) => theme.background};
    border-radius: 6px;
    margin-right: 1.5em;
    padding: 0.65em 0.5em;
    height: 100%;
  }
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
  width: 80px;
  max-height: 220px;
  border-radius: 6px;
  border: none;
  box-sizing: border-box;
  overflow-y: auto;
  z-index: 999;
  max-width: 100px;
  padding: 0;
  margin-top: 2.7em;
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
  padding: 0.3em 0;
  width: 100%;
  font-size: 0.8rem;
  text-transform: uppercase;
  cursor: pointer;
  overflow: auto;
  &:hover {
    background: ${({ theme }) => theme.background};
  }
`;

export const DollarIcon = styled(DollarSign)`
  height: 100%;
  min-width: 20px;
  margin-right: 0.2em;
`;

export const SelectionContainer = styled.div`
  display: flex;
`;

export const ArrowsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.2em;
  background: transparent;
`;
