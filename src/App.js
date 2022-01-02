import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Wrapper } from './App.styles';
import { Coins, Portfolio, CoinInformation } from 'pages';
import { SubNavbar, Navbar, themes } from 'components';
import { ThemeProvider } from 'styled-components';
class App extends Component {
  state = {
    currency: 'USD',
    currentTheme: 'dark'
  };
  changeCurrency = (newCurr) => {
    this.setState({ ...this.state, currency: newCurr });
  };

  render() {
    const theme =
      this.state.currentTheme === 'dark' ? themes.darkTheme : themes.lightTheme;
    return (
      <ThemeProvider theme={theme}>
        <Wrapper onScroll={this.handleScroll}>
          <Router>
            <Navbar changeCurrency={this.changeCurrency} />
            <SubNavbar />
            <Routes>
              <Route path="/portfolio" element={<Portfolio />}></Route>
              <Route
                path="/"
                element={<Coins currency={this.state.currency} />}
              />
              <Route path="/coin/:id" element={<CoinInformation />} />
            </Routes>
          </Router>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
