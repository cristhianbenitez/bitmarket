import coinGecko from 'Api/coinGecko.js';
import { Dropdown, SearchInput } from 'Components';
import { withRouter } from 'Helpers';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  StyledButton,
  ThemeButton,
  Wrapper
} from './Navbar.styles.js';

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
      ('err');
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
              currentPage={this.props.location.pathname.slice(1) === ''}
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
          <Dropdown
            items={this.state.supportedCoins}
            changeCurrency={this.props.changeCurrency}
          />
          <ThemeButton />
        </Container>
      </Wrapper>
    );
  }
}

export const WrappedNavbar = withRouter(Navbar);
