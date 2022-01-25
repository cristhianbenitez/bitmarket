import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import { GlobalStyle, NavbarWrapper, Wrapper } from './App.styles';
import { Coins, Portfolio, Summary } from 'pages';
import {
  SubNavbar,
  Navbar,
  MobileHeader,
  darkTheme,
  lightTheme
} from 'components';

export const App = () => {
  // const theme = useSelector((state) => state.theme);
  // const themeMode = theme === 'dark' ? darkTheme : lightTheme;
  return (
    <Wrapper>
      <ThemeProvider theme={darkTheme}>
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
