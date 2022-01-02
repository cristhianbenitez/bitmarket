import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import coinGecko from 'api/coinGecko.js';
import { withRouter } from 'helpers';

import { Dropdown, SearchInput } from 'components';
import {
  Container,
  StyledButton,
  ThemeButton,
  Wrapper
} from './Navbar.styles.js';

class Navbar extends Component {
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
          <Dropdown changeCurrency={this.props.changeCurrency} />
          <ThemeButton />
        </Container>
      </Wrapper>
    );
  }
}

export const WrappedNavbar = withRouter(Navbar);
