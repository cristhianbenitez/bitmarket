import styled from 'styled-components';
import { ReactComponent as Arrow } from 'assets/Icons/Arrow.svg';
import ReactLoading from 'react-loading';

export const PriceArrow = styled(({ price, ...restProps }) => (
  <Arrow {...restProps} />
))`
  width: 11px;
  transform: ${({ price }) => (price > 0 ? 'rotate(180deg)' : 'none')};
  #arrow {
    fill: ${({ price }) => (price > 0 ? '#00FC2A' : '#FE1040')};
  }
`;

export const DropdownArrow = styled(({ isOpen, theme, ...restProps }) => (
  <Arrow {...restProps} />
))`
  width: 11px;
  transform: ${({ isOpen }) => isOpen && 'rotate(180deg)'};
  #arrow {
    fill: ${({ theme }) =>
      theme.background === '#1F2128' ? '#00FC2A' : '#191B1F'};
  }
`;

export const Loading = styled(ReactLoading).attrs(({ theme }) => ({
  color: `${theme.general}`
}))`
  margin: 0.5em auto;
`;
