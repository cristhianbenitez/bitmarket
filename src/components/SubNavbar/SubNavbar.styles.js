import styled from 'styled-components';

import Bitcoin from 'assets/BitcoinIcon.png';
import Ethereum from 'assets/EthereumIcon.png';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Subnav = styled.div`
  background: ${({ theme }) => theme.foreground};
  width: fit-content;
  margin: 0 auto;
  padding: 0.75em 2em;
  border-radius: 0 0 6px 6px;
`;

export const SubnavItem = styled.div`
  padding-right: 1em;
  margin: 0 0.5em;
  display: flex;
  font-size: 0.65rem;
  align-items: center;
  justify-content: center;
`;

export const SubnavText = styled.span`
  padding-right: 1em;
`;

export const BulletCircle = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 100%;
  background: ${({ theme }) => theme.general};
  margin-right: 0.5em;
`;

export const PercentageBar = styled.div`
  width: 45px;
  height: 5px;
  height: 9px;
  background: #2172e5;
  border-radius: 12px;
  z-index: 1;
  margin-left: 0.5em;
`;

export const TotalVolumePercentage = styled.div`
  background: ${({ theme }) => theme.general};
  z-index: 2;
  border-radius: 12px;
  height: 100%;
  width: ${(props) => props.percentage};
`;

export const BitcoinPercentage = styled.div`
  background: ${({ theme }) => theme.general};
  z-index: 2;
  border-radius: 12px;
  height: 100%;
  width: ${(props) => props.percentage};
`;

export const EthereumPercentage = styled.div`
  background: ${({ theme }) => theme.general};
  z-index: 2;
  border-radius: 12px;
  height: 100%;
  width: ${(props) => props.percentage};
`;

export const BitcoinIcon = styled.img.attrs({
  src: `${Bitcoin}`
})`
  padding: 0 0.5em;
`;

export const EthereumIcon = styled.img.attrs({
  src: `${Ethereum}`
})`
  padding: 0 0.5em;
`;

export const LoadingText = styled.p`
  font-size: 0.7rem;
  padding: 0;
  margin: 0;
`;
