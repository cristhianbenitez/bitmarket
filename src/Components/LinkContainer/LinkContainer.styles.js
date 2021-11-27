import styled from 'styled-components';
import LinkIcon from '../../Assets/LinkIcon.png';
import TabsIconImage from '../../Assets/TabsIcon.png';

export const CoinLinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #191b1f;
  height: 100%;
  width: 100%;
  border-radius: 12px;
  padding: 1em 0;
`;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const ChainIcon = styled.img.attrs({
  src: `${LinkIcon}`
})``;
export const TabsIcon = styled.img.attrs({
  src: `${TabsIconImage}`
})``;
export const SiteLink = styled.a`
  text-align: center;
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
