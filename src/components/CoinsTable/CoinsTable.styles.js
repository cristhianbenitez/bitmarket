import styled from 'styled-components';
import { devices } from 'utils';

export const ScrollableDiv = styled.div`
  width: 100%;
  height: 320px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-corner {
    background: ${({ theme }) => theme.foreground};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.barChart};
    border-radius: 4px;
  }
  @media (min-height: 1024px) {
    height: 480px;
  }
  @media ${devices.laptopL} {
    overflow: unset;
    height: 100%;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-radius: 6px;
  font-weight: 400;
  border-collapse: collapse;
`;
export const TableRowHead = styled.tr`
  & :first-child {
    display: none;
  }
  @media ${devices.desktop} {
    & :first-child {
      display: table-cell;
    }
  }
`;

export const TableHead = styled.thead`
  background: ${({ theme }) => theme.foreground};
  color: #fff;
  position: sticky;
  top: -15px;
  height: 40px;
  @media ${devices.laptopL} {
    position: unset;
  }
`;
export const TableHeading = styled.th`
  font-weight: 300;
  text-align: start;
  font-size: 0.7rem;
  padding-left: 0.7em;
  @media ${devices.tablet} {
    font-size: 0.8rem;
  }
  @media ${devices.desktop} {
    font-size: 1rem;
  }
`;
export const TableBody = styled.tbody``;
