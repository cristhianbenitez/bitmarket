import styled from 'styled-components';
import LinkIcon from 'assets/LinkIcon.png';

export const CoinInfoContainer = styled.div`
  width: 100%;
`;

export const TopContent = styled.div`
  background: ${({ theme }) => theme.foreground};
  border-radius: 6px;
  padding: 2.5em 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CoinImageContainer = styled.div`
  background: ${({ theme }) => theme.background};
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

export const BottomContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1em;
`;
