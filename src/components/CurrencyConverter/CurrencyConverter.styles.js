import styled from 'styled-components';
import { ReactComponent as SwapArrows } from 'assets/Icons/SwapArrows.svg';
import NumberFormat from 'react-number-format';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 2em;
`;

export const CurrencyWrapper = styled.div`
  display: flex;
`;

export const Currency = styled.div`
  background: #06d554;
  padding: 1em 2.5em;
  border-radius: 12px 0 0 12px;
  text-transform: uppercase;
`;

export const ValueInput = styled(NumberFormat)`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.foreground};
  color: ${({ theme }) => theme.general};
  font-size: 1rem;
  padding-left: 1em;
  width: 250px;
  border-radius: 0 12px 12px 0;
  border: none;
  box-shadow: none;
  &:focus,
  &:hover {
    outline: none;
  }
`;

export const SwapIcon = styled(SwapArrows)`
  margin: 0 2em;
  cursor: pointer;

  #swap-icon {
    fill: ${({ theme }) => theme.general};
  }
`;
