import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  position: absolute;
  border: none;
  background: ${({ theme }) => theme.foreground};
  padding: 8px 0;
  list-style-type: none;
  border-radius: 6px;
  width: 280px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 999;
  margin: 0;
  margin-top: 1em;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #06d554;
    outline: 1px solid #06d554;
    border-radius: 4px;
  }
`;
export const Item = styled.li`
  cursor: pointer;
  padding: 0 24px;
  width: 100%;
  box-sizing: border-box;
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.background};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: ${({ theme }) => theme.general};
  }
`;
