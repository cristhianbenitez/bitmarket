import styled from 'styled-components';
import { ReactComponent as Search } from 'assets/Icons/Search.svg';

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
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

export const SearchIcon = styled(Search)`
  cursor: pointer;
  padding: 0 0.5em;

  #search-icon {
    fill: ${({ theme }) => theme.general};
  }
`;
