import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Layout, GlobalStyle, NavbarWrapper, Wrapper } from './App.styles';
import { Coins, Portfolio, Summary } from 'pages';
import { SubNavbar, Navbar, MobileHeader, Themes } from 'components';
import { CurrencyProvider } from 'hooks';
import { useSelector } from 'react-redux';

const App = () => {
  const theme = useSelector((state) => state.theme);
  const themeMode = theme === 'dark' ? Themes.darkTheme : Themes.lightTheme;
  return (
    <Wrapper>
      <CurrencyProvider>
        <ThemeProvider theme={themeMode}>
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
            </Routes>
          </Layout>
        </ThemeProvider>
      </CurrencyProvider>
    </Wrapper>
  );
};

export default App;
