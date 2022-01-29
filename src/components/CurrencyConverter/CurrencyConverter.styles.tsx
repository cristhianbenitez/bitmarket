import styled from 'styled-components';
import { ReactComponent as SwapArrows } from 'assets/Icons/SwapArrows.svg';
import NumberFormat from 'react-number-format';
import { devices } from 'utils';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  @media ${devices.laptop} {
    flex-direction: row;
  }
`;

export const CurrencyWrapper = styled.div`
  display: flex;
`;

export const Currency = styled.div`
  background: #06d554;
  height: 100%;
  padding: 0.7em 2.5em;
  display: flex;
  justify-content: center;
  width: 30%;
  border-radius: 12px 0 0 12px;
  text-transform: uppercase;
`;

export const ValueInput = styled(NumberFormat)`
  display: flex;
  align-items: center;
  background: #2c2d33;
  color: ${({ theme }) => theme.general};
  font-size: 1rem;
  padding-left: 1em;
  width: 70%;
  border-radius: 0 12px 12px 0;
  border: none;
  box-shadow: none;
  @media ${devices.laptop} {
    background: ${({ theme }) => theme.foreground};
  }
  &:focus,
  &:hover {
    outline: none;
  }
`;

export const SwapIcon = styled(SwapArrows)`
  margin: 0 2em;
  height: 40px;
  cursor: pointer;

  #swap-icon {
    fill: ${({ theme }) => theme.general};
  }
`;
