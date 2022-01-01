import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Wrapper } from './App.styles';
import { Coins, Portfolio, CoinInformation } from 'pages';
import { SubNavbar, Navbar } from 'components';

class App extends Component {
  state = {
    currency: ''
  };
  changeCurrency = (newCurr) => {
    this.setState({ currency: newCurr });
  };

  componentDidMount() {
    localStorage.setItem('selection', this.state.currency || 'usd');
  }

  render() {
    return (
      <Wrapper>
        <Router>
          <Navbar changeCurrency={this.changeCurrency} />
          <SubNavbar />
          <Routes>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route
              path="/"
              element={<Coins currency={this.state.currency} />}
            />
            <Route
              path="/coin/:id"
              element={<CoinInformation currency={this.state.currency} />}
            />
          </Routes>
        </Router>
      </Wrapper>
    );
  }
}

export default App;
