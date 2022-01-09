import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle, NavbarContainer, Wrapper } from './App.styles';
import { Coins, Portfolio, Summary } from 'pages';
import { SubNavbar, Navbar, lightTheme, darkTheme } from 'components';
import { ThemeProvider } from 'styled-components';

class App extends Component {
  state = {
    currency: '',
    theme: 'dark'
  };

  changeCurrency = (newCurr) => {
    this.setState({ currency: newCurr });
  };

  setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    this.setState({ theme: mode });
  };

  themeToggler = () => {
    this.state.theme === 'dark' ? this.setMode('light') : this.setMode('dark');
  };

  componentDidMount() {
    localStorage.setItem('selection', this.state.currency || 'usd');
    const localTheme = window.localStorage.getItem('theme');
    localTheme && this.setState({ theme: localTheme });
  }

  render() {
    const themeMode = this.state.theme === 'dark' ? lightTheme : darkTheme;

    return (
      <Wrapper>
        <ThemeProvider theme={themeMode}>
          <GlobalStyle />
          <Router>
            <NavbarContainer>
              <Navbar
                changeCurrency={this.changeCurrency}
                themeToggler={this.themeToggler}
              />
            </NavbarContainer>
            <div>
              <SubNavbar />
              {/* <Routes>
              <Route
                path="/portfolio"
                element={<Portfolio currency={this.state.currency} />}
              ></Route>
              <Route
                path="/"
                element={<Coins currency={this.state.currency} />}
              />
              <Route
                path="/coin/:id"
                element={<Summary currency={this.state.currency} />}
              />
            </Routes> */}
            </div>
          </Router>
        </ThemeProvider>
      </Wrapper>
    );
  }
}

export default App;
