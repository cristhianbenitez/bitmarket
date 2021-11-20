import React, { Component } from 'react';
import { Coins, Portfolio } from './Pages';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import {
  Wrapper,
  Container,
  Navbar,
  StyledButton,
  ThemeButton
} from './App.styles';
import { Dropdown, SearchInput } from './Components';
import { SubNavbar } from './Components/SubNavbar/SubNavbar';
import axios from 'axios';
class App extends Component {
  state = {
    supportedCoins: []
  };
  getSupportedCurrencies = async () => {
    try {
      const { data } = await axios.get(
        'https://api.coingecko.com/api/v3/simple/supported_vs_currencies'
      );
      const upperCaseArr = data.map((el) => el.toUpperCase());
      this.setState({ supportedCoins: upperCaseArr });
    } catch (err) {
      console.log('err');
    }
  };
  componentDidMount() {
    this.getSupportedCurrencies();
  }
  render() {
    return (
      <Wrapper>
        <Router>
          <Navbar>
            <Container>
              <StyledButton to="/">Coins</StyledButton>
              <StyledButton to="/portfolio">Portfolio</StyledButton>
            </Container>
            <Container>
              <SearchInput />
              <Dropdown items={this.state.supportedCoins} />
              <ThemeButton />
            </Container>
          </Navbar>
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
