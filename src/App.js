import React, { Component } from 'react';
import { Coins, Portfolio, CoinInformation } from './Pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Wrapper } from './App.styles';
import { SubNavbar, Navbar } from './Components';

class App extends Component {
  state = {
    currency: 'USD'
  };
  changeCurrency = (newCurr) => {
    this.setState({ ...this.state, currency: newCurr });
  };

  render() {
    return (
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
    );
  }
}

export default App;
