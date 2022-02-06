import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Coins, Portfolio, Summary } from 'pages';
import { SubNavbar, Navbar, MobileHeader } from 'components';
import { ThemeProvider } from 'theme';
import { GlobalStyle, NavbarWrapper, Wrapper, Layout } from './App.styles';

export const App = () => {
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
