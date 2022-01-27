import React from 'react';
import { useDispatch } from 'react-redux';

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
} from './Navbar.styles';
import { useLocation } from 'react-router-dom';
import { changeTheme } from 'store/reducers/theme/themeSlicer';

export const Navbar = () => {
  const dispatch = useDispatch();
  const toggleTheme = () => {
    // dispatch(changeTheme());
  };
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
