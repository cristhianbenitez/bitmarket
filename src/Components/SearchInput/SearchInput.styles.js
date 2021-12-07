import Icon from 'Assets/Search-Icon.svg';
import styled from 'styled-components';

export const StyledForm = styled.form`
  background-color: #2c2f36;
  border-radius: 6px;
  margin-right: 1.5em;
  display: flex;
`;

export const StyledInput = styled.input`
  background: transparent;
  color: #fff;
  border: none;
  outline: none;
  padding: 0.5em 5em 0.5em 0.5em;
  &::placeholder {
    color: #fff;
  }
`;

export const SearchIcon = styled.img.attrs({
  src: `${Icon}`
})`
  cursor: pointer;
  padding: 0 0.5em;
`;
