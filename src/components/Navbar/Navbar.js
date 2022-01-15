import React, { Component } from 'react';

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
import { useLocation } from 'react-router-dom';
import { changeTheme } from 'features/theme/themeSlicer';
import { useDispatch } from 'react-redux';

export const Navbar = () => {
  const dispatch = useDispatch();
  const toggleTheme = () => dispatch(changeTheme());
  const { pathname } = useLocation();
  return (
    <Wrapper>
      <Container>
        <StyledButton to="/" currentPage={pathname.slice(1) === ''}>
          <CoinsIcon /> Coins
        </StyledButton>
        <StyledButton
          to="/portfolio"
          currentPage={pathname.slice(1) === 'portfolio'}
        >
          <PortfolioIcon />
          Portfolio
        </StyledButton>
        <SummaryButton currentPage={pathname.slice(1, 5) === 'coin'}>
          <SummaryIcon />
          Summary
        </SummaryButton>
      </Container>
      <Separator>
        <SearchInput />
        <Dropdown />
        <ThemeButton onClick={toggleTheme} />
      </Separator>
    </Wrapper>
  );
};
