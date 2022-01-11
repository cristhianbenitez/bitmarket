import styled from 'styled-components';
import DarkTheme from 'assets/BackgroundImages/DarkTheme.png';
import LightTheme from 'assets/BackgroundImages/LightTheme.png';
import { devices } from 'utils';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
`;

export const Container = styled.div`
  @media ${devices.tablet} {
    padding: 1em 2em;
  }
  @media ${devices.desktop} {
    width: 100%;
    margin: auto;
    margin-bottom: 5em;
    padding: 1em 5em;

    max-width: 1630px;
  }
`;

export const CoinLinksContainer = styled.div`
  @media ${devices.laptop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5em;
    & > div {
      width: 32.5%;
    }
  }
`;

export const Link = styled.div``;

export const TopPageContent = styled.div`
  max-width: 80%;
  margin: 0 auto;
  @media ${devices.laptop} {
    margin-top: 2em;
    display: flex;
    justify-content: space-between;
    max-width: 100%;
  }
`;

export const BottomPageContent = styled.div`
  max-width: 80%;
  margin: 0 auto;
  @media ${devices.laptop} {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 2em;
    max-width: 100%;
  }
`;

export const LeftContent = styled(StyledDiv)`
  @media ${devices.laptop} {
    justify-content: space-between;
    background: unset;
    width: 20%;
  }
`;

export const MiddleContent = styled(StyledDiv)`
  @media ${devices.laptop} {
    width: 30%;
    background: ${({ theme }) => theme.foreground};
  }
`;

export const RightContent = styled(StyledDiv)`
  @media ${devices.laptop} {
    width: 40%;
    background: ${({ theme }) => theme.foreground};
  }
`;

export const Subtitle = styled.h1`
  text-align: start;
  font-weight: 400;
  margin-bottom: 1.8em;
  font-size: 1rem;
  margin-top: 1em;
`;

const darkGunmetal = '#1F2128';

export const Background = styled.img.attrs((props) => ({
  src: `${props.theme.background === darkGunmetal ? DarkTheme : LightTheme}`
}))`
  display: none;
  @media ${devices.laptop} {
    display: block;
    margin-top: 5em;
    width: 100%;
  }
`;
