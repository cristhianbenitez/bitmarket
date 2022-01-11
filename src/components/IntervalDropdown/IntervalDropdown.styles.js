import styled from 'styled-components';

export const IntervalDropdownWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  margin-bottom: 2em;
  margin-top: 3em;
`;

export const DropDownHeader = styled.div`
  border-radius: 8px 0 0 8px;
  display: flex;
  width: 130px;
  justify-content: space-between;
  padding: 0 1em;
  align-items: center;
  background: #2c2d33;
  cursor: pointer;
`;

export const DropDownList = styled.ul`
  list-style: none;
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-top: 3em;
  margin-right: 9vw;
  background: ${({ theme }) => theme.foreground};
  width: 130px;
  border-radius: 6px;
  height: auto;
  overflow: auto;
  -webkit-transition: height 0.3s ease;
  transition: height 0.3s ease;
  margin-left: -0.8em;
`;
export const ListItem = styled.li`
  color: ${({ theme }) => theme.general};
  background: ${({ theme }) => theme.foreground};
  padding: 0.4em;
  text-align: center;
  cursor: pointer;
  overflow: auto;
  &:hover {
    background: ${({ theme }) => theme.background};
  }
`;

export const SelectButton = styled.div`
  padding: 0.6em 1em;
  background-color: #06d554;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
`;

export const SelectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
