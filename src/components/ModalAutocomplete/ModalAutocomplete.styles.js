import styled from 'styled-components';
import { ReactComponent as Arrow } from 'assets/Icons/Arrow.svg';

export const Root = styled.div`
  position: relative;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 1em;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  background: ${({ theme }) => theme.foreground};
  width: 100%;
  &:focus-within {
    outline: #06d554 solid 2px;
  }
`;

export const Label = styled.label`
  display: block;
  position: absolute;
  padding-left: 1em;
  top: 50%;
  transform: translateY(-50%);
`;

export const Input = styled.input`
  width: 100%;
  height: 32px;
  box-sizing: border-box;
  transition: border-color 150ms linear;
  color: ${({ theme }) => theme.general};
  background: ${({ theme }) => theme.foreground};
  border-radius: 8px;
  padding: 2.1em 1em;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const ArrowIcon = styled(Arrow)`
  width: 12px;
  #arrow {
    fill: #06d554;
  }
`;

export const AutoCompleteIcon = styled.span`
  transform: ${(props) => (props.isOpen ? 'rotateX(180deg)' : 'none')};
  transform-origin: center;
  display: flex;
  padding-right: 1em;
  cursor: pointer;
  svg {
    margin: auto;
  }
`;

export const AutoCompleteContainer = styled.ul`
  background: ${({ theme }) => theme.foreground};
  padding: 8px 0;
  list-style-type: none;
  min-width: 320px;
  width: 100%;
  position: absolute;
  border: 1px solid #b6c1ce;
  border-radius: 6px;
  top: 60px;
  border: none;
  box-sizing: border-box;
  max-height: 220px;
  overflow-y: auto;
  z-index: 999;
  margin: 0;
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #06d554;
    outline: 1px solid #06d554;
    border-radius: 4px;
  }
`;

export const AutoCompleteItem = styled.li`
  padding: 0 24px;
  width: 100%;
  box-sizing: border-box;
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.background};
  }
`;

export const AutoCompleteItemButton = styled.button`
  color: ${({ theme }) => theme.general};
  background: none;
  border: none;
  padding: 0;
  width: 100%;
  line-height: 32px;
  text-align: left;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  &:active {
    outline: none;
    color: #0076f5;
  }
`;
