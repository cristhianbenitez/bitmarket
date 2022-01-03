import styled from 'styled-components';
import { ReactComponent as LinkChain } from 'assets/Icons/LinkChain.svg';
import { ReactComponent as LinkTabs } from 'assets/Icons/LinkTabs.svg';

export const CoinLinkContainer = styled.div`
  display: flex;
  justify-content: ${(props) => (props.extraIcon ? 'space-around' : 'start')};
  align-items: center;
  background: ${({ theme }) => theme.foreground};
  height: 100%;
  width: 100%;
  border-radius: 12px;
  padding: 1em 0;
`;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ChainIcon = styled(LinkChain)`
  margin: ${(props) => (props.extraIcon ? '0' : '0 1em')};

  #link-icon {
    fill: ${({ theme }) => theme.general};
  }
`;
export const TabsIcon = styled(LinkTabs)`
  #tab {
    stroke: ${({ theme }) => theme.general};
  }
`;
export const SiteLink = styled.a`
  text-align: center;
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
