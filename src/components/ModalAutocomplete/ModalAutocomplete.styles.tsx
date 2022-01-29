import styled from 'styled-components';
import { ReactComponent as Arrow } from 'assets/Icons/Arrow.svg';

export const Root = styled.div``;

export const InputContainer = styled.div`
  width: 100%;
  border-radius: 12px;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.foreground};
  margin-bottom: 1em;
  &:focus-within {
    outline: #06d554 solid 2px;
  }
  &:focus-within > input::placeholder {
    visibility: hidden;
  }
`;

export const Label = styled.label`
  display: block;
  position: absolute;
  padding-left: 1em;
  margin-top: 1.5em;
  transform: translateY(-50%);
`;

export const Input = styled.input`
  background: ${({ theme }) => theme.foreground};
  border: none;
  width: 100%;
  color: ${({ theme }) => theme.general};
  height: 32px;
  padding: 2.1em 1em;
  border-radius: 8px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.general};
    font-size: 1rem;
  }
`;

export const ArrowIcon = styled(Arrow)`
  width: 12px;
  #arrow {
    fill: #06d554;
  }
`;

export const AutoCompleteIcon = styled.span<{ isOpen: boolean }>`
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
  position: absolute;
  background: ${({ theme }) => theme.foreground};
  padding: 8px 0;
  list-style-type: none;
  width: 60%;
  max-height: 220px;
  overflow-y: auto;
  border-radius: 6px;
  border: 1px solid #b6c1ce;
  border: none;
  z-index: 999;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #06d554;
    outline: 1px solid #06d554;
    border-radius: 4px;
  }
  @media (min-width: 500px) {
    width: 44%;
  }
  @media (min-width: 750px) {
    width: 430px;
  }
  @media (min-width: 800px) {
    width: 480px;
  }
`;

export const AutoCompleteItem = styled.li`
  padding: 0 24px;
  width: 100%;
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.background};
  }
`;

export const AutoCompleteItemButton = styled.button`
  color: ${({ theme }) => theme.general};
  background: none;
  border: none;
  width: 100%;
  line-height: 32px;
  text-align: left;
  cursor: pointer;
  padding: 0;
  &:active {
    outline: none;
    color: #0076f5;
  }
`;
