import styled from 'styled-components';
import LinkIcon from 'Assets/LinkIcon.png';

export const CoinInfoContainer = styled.div`
  width: 100%;
`;

export const TopContent = styled.div`
  background: #191b1f;
  border-radius: 6px;
  padding: 2.5em 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CoinImageContainer = styled.div`
  background: #1f2128;
  padding: 1.5em;
  border-radius: 12px;
  margin-bottom: 0;
`;

export const CoinImage = styled.img`
  object-fit: cover;
  width: 100%;
`;

export const CoinNameText = styled.h2`
  margin-top: 0.25em;
  font-weight: 400;
  font-size: 1.5625rem;
`;

export const CoinLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  background: #191b1f;
  height: 100%;
  border-radius: 12px;
  padding: 1em 1em;
`;

export const IconContainer = styled.div``;

export const ChainIcon = styled.img.attrs({
  src: `${LinkIcon}`
})`
  margin-right: 1.5em;
`;

export const SiteLink = styled.a`
  margin: 0;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: #ffff;
  }
`;

export const BottomContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1em;
`;
