import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Coins, Portfolio, Summary } from 'pages';
import { SubNavbar, Navbar, MobileHeader } from 'components';
import { ThemeProvider } from 'theme';
import { GlobalStyle, NavbarWrapper, Wrapper, Layout } from './App.styles';
import ReactGA from 'react-ga';

export const App = () => {
  React.useEffect(() => {
    ReactGA.initialize('G-9DN1VJ1B41', {
      gaOptions: { siteSpeedSampleRate: 100 }
    });
    ReactGA.pageview('Init page view');
  }, []);
  return (
    <Wrapper>
      <ThemeProvider>
        <GlobalStyle />
        <NavbarWrapper>
          <Navbar />
        </NavbarWrapper>
        <Layout>
          <MobileHeader />
          <SubNavbar />
          <Routes>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/" element={<Coins />} />
            <Route path="/coin/:id" element={<Summary />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </Wrapper>
  );
};
