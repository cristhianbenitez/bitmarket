import React, { Component } from 'react';

import {
  Container,
  Wrapper,
  StyledButton,
  ThemeButton
} from './Navbar.styles.js';
import { Dropdown } from '../Dropdown/Dropdown';
import { SearchInput } from '../SearchInput/SearchInput';
import coinGecko from '../../Api/coinGecko.js';
import { withRouter } from '../../Helpers/WithRouter.js';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {
    supportedCoins: []
  };
  getSupportedCurrencies = async () => {
    try {
      const { data } = await coinGecko.get('/simple/supported_vs_currencies');
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
        <Container>
          <Link to="/">
            <StyledButton
              currentPage={this.props.location.pathname.slice(1) === 'coins'}
            >
              Coins
            </StyledButton>
          </Link>
          <Link to="/portfolio">
            <StyledButton
              currentPage={
                this.props.location.pathname.slice(1) === 'portfolio'
              }
            >
              Portfolio
            </StyledButton>
          </Link>
        </Container>
        <Container>
          <SearchInput />
          <Dropdown items={this.state.supportedCoins} />
          <ThemeButton />
        </Container>
      </Wrapper>
    );
  }
}

export const WrappedNavbar = withRouter(Navbar);
