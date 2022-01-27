import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
<<<<<<< HEAD
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
=======
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
>>>>>>> ce4bb9b221d51f993cf8455ce660d335b07a1423
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
