import styled from 'styled-components';
import Arrow from 'assets/Arrow.svg';

export const Root = styled.div`
  position: relative;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 1em;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  background-color: #191b1f;
  width: 100%;
  &:focus-within {
    outline: #1976d2 solid 2px;
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
  color: #ffff;
  background-color: #191b1f;
  border-radius: 8px;
  padding: 2.1em 1em;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const ArrowIcon = styled.img.attrs({
  src: `${Arrow}`
})`
  width: 12px;
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
  background: #191b1f;
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
    background-color: #2c2f36;
    outline: 1px solid #2c2f36;
    border-radius: 4px;
  }
`;

export const AutoCompleteItem = styled.li`
  padding: 0 24px;
  width: 100%;
  box-sizing: border-box;
  &:hover,
  &:focus {
    background: #2c2f36;
  }
`;

export const AutoCompleteItemButton = styled.button`
  color: #fff;
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
