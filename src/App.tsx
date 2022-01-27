import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useAppSelector } from 'store/hooks';
import { Coins, Portfolio, Summary } from 'pages';
import { SubNavbar, Navbar, MobileHeader, light, dark } from 'components';

import { GlobalStyle, NavbarWrapper, Wrapper } from './App.styles';

export const App = () => {
  const themeMode = useAppSelector((state) => state.theme);
  const theme = (themeMode === 'dark' && dark) || light;
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NavbarWrapper>
          <Navbar />
        </NavbarWrapper>
        <>
          <MobileHeader />
          <SubNavbar />
          <Routes>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/" element={<Coins />} />
            <Route path="/coin/:id" element={<Summary />} />
          </Routes>
        </>
      </ThemeProvider>
    </Wrapper>
  );
};
