import styled from 'styled-components';
import { ReactComponent as Search } from 'assets/Icons/Search.svg';
import { devices } from 'utils';

export const SearchBox = styled.div`
  margin-right: 1.5em;
  display: none;
  @media (min-width: 500px) {
    padding: 0.6em 0.5em;
    background: ${({ theme }) => theme.background};
    border-radius: 6px;
    display: flex;
    align-items: center;
  }
`;

export const StyledInput = styled.input`
  display: none;

  @media (min-width: 670px) {
    display: block;
  }
  @media ${devices.tablet} {
    color: ${({ theme }) => theme.general};
    border: none;
    outline: none;
    min-height: 100%;
    background: transparent;
    padding-left: 0.7em;
    &::placeholder {
      color: ${({ theme }) => theme.general};
    }
  }
  @media ${devices.desktop} {
    padding-right: 12em;
  }
`;
export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: -1.5em;
  @media ${devices.tablet} {
    margin: 0;
  }
`;

export const SearchIcon = styled(Search)`
  margin-bottom: 0.5em;
  max-width: 100%;
  #search-icon {
    fill: ${({ theme }) => theme.general};
  }

  @media ${devices.tablet} {
    margin: 0;
    width: 1em;
  }
`;

export const IconText = styled.p`
  font-size: 0.7rem;
  @media (min-width: 670px) {
    margin-left: 0.5em;
  }
  @media ${devices.tablet} {
    display: none;
  }
`;
