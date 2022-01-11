import React, { Component } from 'react';
import { withRouter } from 'helpers';

import { Dropdown, SearchInput } from 'components';
import {
  Container,
  StyledButton,
  ThemeButton,
  Wrapper,
  SummaryButton,
  SummaryIcon,
  PortfolioIcon,
  CoinsIcon,
  Separator
} from './Navbar.styles.js';
class Navbar extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <StyledButton
            to="/"
            currentPage={this.props.location.pathname.slice(1) === ''}
          >
            <CoinsIcon /> Coins
          </StyledButton>
          <StyledButton
            to="/portfolio"
            currentPage={this.props.location.pathname.slice(1) === 'portfolio'}
          >
            <PortfolioIcon />
            Portfolio
          </StyledButton>
          <SummaryButton
            currentPage={this.props.location.pathname.slice(1, 5) === 'coin'}
          >
            <SummaryIcon />
            Summary
          </SummaryButton>
        </Container>
        <Separator>
          <SearchInput />
          <Dropdown changeCurrency={this.props.changeCurrency} />
          <ThemeButton onClick={this.props.themeToggler} />
        </Separator>
      </Wrapper>
    );
  }
}

export const WrappedNavbar = withRouter(Navbar);
