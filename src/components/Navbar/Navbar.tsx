import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from 'store/hooks';
import { changeTheme } from 'store/reducers/theme/themeSlicer';

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
<<<<<<< HEAD:src/components/Navbar/Navbar.tsx

export const Navbar = () => {
  const dispatch = useAppDispatch();
  const toggleTheme = () => {
    dispatch(changeTheme(null));
=======
import { useLocation } from 'react-router-dom';
import { changeTheme } from 'store/reducers/theme/themeSlicer';

export const Navbar = () => {
  const dispatch = useDispatch();
  const toggleTheme = () => {
    // dispatch(changeTheme());
>>>>>>> ce4bb9b221d51f993cf8455ce660d335b07a1423:src/components/Navbar/Navbar.js
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
