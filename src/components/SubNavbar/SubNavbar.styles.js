import styled, { css } from 'styled-components';

import { ReactComponent as BtcIcon } from 'assets/Icons/Bitcoin.svg';
import { ReactComponent as EthIcon } from 'assets/Icons/Ethereum.svg';
import { devices } from 'utils';

export const Subnav = styled.div`
  background: none;
  @media ${devices.tablet} {
    display: flex;
    background: ${({ theme }) => theme.foreground};
    width: fit-content;
    margin: 0 auto;
    padding: 0.8em 2em;
    border-radius: 0 0 6px 6px;
  }
  @media ${devices.desktop} {
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
`;

export const SubnavItem = styled.div`
  display: none;
  @media (min-width: 670px) {
    display: flex;
    padding-right: 1em;
    align-items: center;
    margin: 0 0.5em;
    font-size: 0.7rem;
  }
  @media ${devices.desktop} {
    padding-right: 3em;
  }
`;

export const Separator = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 0.75em 2em;
  background: #2c2d33;
  @media ${devices.tablet} {
    background: transparent;
    padding: 0;
  }
`;

const itemStyles = css`
  display: flex;
  align-items: center;
  font-size: 0.7rem;
  @media ${devices.tablet} {
    padding-right: 1em;
  }
  @media ${devices.desktop} {
    padding-right: 3em;
  }
`;

export const ItemContainer = styled.div`
  ${itemStyles}
`;

export const Text = styled.span`
  font-size: inherit;
  padding-right: 1em;
`;

export const BulletCircle = styled.div`
  display: none;
  @media ${devices.tablet} {
    display: block;
    width: 7px;
    height: 7px;
    border-radius: 100%;
    background: ${({ theme }) => theme.general};
    margin-right: 0.5em;
  }
`;

export const PercentageBar = styled.div`
  width: 40px;
  height: 9px;
  background: #2172e5;
  border-radius: 12px;
  z-index: 1;
  margin-left: 0.5em;
`;

export const PercentageFiller = styled.div`
  background: ${({ theme }) => theme.general};
  z-index: 2;
  border-radius: 12px;
  height: 100%;
  width: ${(props) => `${props.percentage}%`};
`;

const IconsStyles = css`
  width: 10px;
  margin-right: 0.3em;
`;
export const BitcoinIcon = styled(BtcIcon)`
  ${IconsStyles}
`;

export const EthereumIcon = styled(EthIcon)`
  ${IconsStyles}
`;
