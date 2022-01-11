import styled, { css } from 'styled-components';
import { ReactComponent as LinkChain } from 'assets/Icons/LinkChain.svg';
import { ReactComponent as LinkTabs } from 'assets/Icons/LinkTabs.svg';
import { devices } from 'utils';

export const CoinLinkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #2c2d33;
  border-radius: 12px;
  height: 100%;
  padding: 1em 0;
  width: 100%;
  margin-bottom: 1em;

  & div {
    padding: 0;
  }
  ${({ extraIcon }) =>
    extraIcon &&
    css`
      width: 100%;
      justify-content: space-between;
      padding: 1em 1em;
    `};

  @media ${devices.tablet} {
    background: ${({ theme }) => theme.foreground};
  }
  @media ${devices.laptop} {
    margin: 0;
  }
`;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2em;
`;

export const ChainIcon = styled(({ extraIcon, ...restProps }) => (
  <LinkChain {...restProps} />
))`
  margin: ${({ extraIcon }) => (extraIcon ? '0' : '0 1em')};

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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.7rem;
  width: 70%;
  display: flex;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: ${({ theme }) => theme.general};
  }
  @media ${devices.laptop} {
    font-size: 0.9rem;
  }
`;
