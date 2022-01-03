import styled from 'styled-components';
import Icon from 'assets/Search-Icon.svg';

export const StyledForm = styled.form`
  background: ${({ theme }) => theme.background};
  border-radius: 6px;
  margin-right: 1.5em;
  display: flex;
`;

export const StyledInput = styled.input`
  background: transparent;
  color: ${({ theme }) => theme.general};
  border: none;
  outline: none;
  padding: 0.5em 5em 0.5em 0.5em;
  &::placeholder {
    color: ${({ theme }) => theme.general};
  }
`;

export const SearchIcon = styled.img.attrs({
  src: `${Icon}`
})`
  cursor: pointer;
  padding: 0 0.5em;
`;
