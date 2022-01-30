import styled from 'styled-components';
import { devices } from 'utils';
import { createGlobalStyle } from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column-reverse;
  @media ${devices.tablet} {
    flex-direction: column;
  }
`;

export const Layout = styled.main``;

export const NavbarWrapper = styled.nav`
  padding: 0.8em 0.5em;
  background: #2c2d33;
  position: fixed;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  z-index: 999;
  height: auto;

  @media ${devices.tablet} {
    position: unset;
    background: ${({ theme }) => theme.foreground};
    padding: 1em 1em;
    max-height: 100%;
  }
  @media ${devices.desktop} {
    padding: 1em 5em;
  }
`;

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
}

body,html {
  margin: 0 ;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  background: #171821;
  color: ${({ theme }) => theme.general};
  @media ${devices.tablet}{
    background: ${({ theme }) => theme.background};

  }
}
a {
  text-decoration: none;
}`;
