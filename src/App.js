import React, { Component } from 'react';
import { Coins, Portfolio } from './Pages';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { Wrapper } from './App.styles';
import { SubNavbar, Navbar } from './Components';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Router>
          <Navbar />
          <SubNavbar />
          <Routes>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/coins" element={<Coins />}></Route>
            <Route path="/" element={<Navigate replace to="/coins" />} />
          </Routes>
        </Router>
      </Wrapper>
    );
  }
}

export default App;
