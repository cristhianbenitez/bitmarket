import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Content, GlobalStyle, NavbarContainer, Wrapper } from './App.styles';
import { Coins, Portfolio, Summary } from 'pages';
import {
  SubNavbar,
  Navbar,
  MobileHeader,
  lightTheme,
  darkTheme
} from 'components';
import { ThemeProvider } from 'styled-components';
import { useLocalStorage } from 'hooks';

const App = () => {
  const [currency, setCurrency] = useLocalStorage('currency', 'usd');
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  const themeToggler = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  const themeMode = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <Wrapper>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Router>
          <NavbarContainer>
            <Navbar setCurrency={setCurrency} themeToggler={themeToggler} />
          </NavbarContainer>
          <Content>
            <MobileHeader />
            <SubNavbar />
            <Routes>
              <Route
                path="/portfolio"
                element={<Portfolio currency={currency} />}
              ></Route>
              <Route path="/" element={<Coins currency={currency} />} />
              <Route
                path="/coin/:id"
                element={<Summary currency={currency} />}
              />
            </Routes>
          </Content>
        </Router>
      </ThemeProvider>
    </Wrapper>
  );
};

export default App;
