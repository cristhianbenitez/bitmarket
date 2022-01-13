import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Content, GlobalStyle, NavbarContainer, Wrapper } from './App.styles';
import { Coins, Portfolio, Summary } from 'pages';
import { SubNavbar, Navbar, MobileHeader, Themes } from 'components';
import { useLocalStorage, CurrencyProvider } from 'hooks';

const App = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');
  const toggleTheme = () =>
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  const themeMode = theme === 'dark' ? Themes.darkTheme : Themes.lightTheme;
  return (
    <Wrapper>
      <CurrencyProvider>
        <ThemeProvider theme={themeMode}>
          <GlobalStyle />
          <Router>
            <NavbarContainer>
              <Navbar themeToggler={toggleTheme} />
            </NavbarContainer>
            <Content>
              <MobileHeader />
              <SubNavbar />
              <Routes>
                <Route path="/portfolio" element={<Portfolio />}></Route>
                <Route path="/" element={<Coins />} />
                <Route path="/coin/:id" element={<Summary />} />
              </Routes>
            </Content>
          </Router>
        </ThemeProvider>
      </CurrencyProvider>
    </Wrapper>
  );
};

export default App;
