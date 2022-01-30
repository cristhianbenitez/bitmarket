import styled from 'styled-components';
import { devices } from 'utils';

export const CoinInfoContainer = styled.div`
  width: 100%;
`;

export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #171821;
  border-radius: 6px;
  margin-bottom: 1em;
  @media ${devices.tablet} {
    background: ${({ theme }) => theme.background};
  }
  @media ${devices.laptop} {
    background: ${({ theme }) => theme.foreground};
    padding: 2em;
  }
  @media ${devices.laptopL} {
    padding: 3em;
  }
`;

export const CoinImageContainer = styled.div`
  background: #2c2d33;
  padding: 1.5em;
  border-radius: 12px;
  margin-bottom: 0;
  @media ${devices.tablet} {
    background: ${({ theme }) => theme.foreground};
  }
  @media ${devices.laptop} {
    background: ${({ theme }) => theme.background};
  }
`;

export const CoinImage = styled.img`
  object-fit: cover;
  width: 100%;
`;

export const CoinNameText = styled.p`
  margin-top: 0.25em;
  font-weight: 400;
  font-size: 1.5rem;
`;

export const BottomContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
