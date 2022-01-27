import React from 'react';
import { useLocation } from 'react-router-dom';
import { Header, Title } from './MobileHeader.styles';

export const MobileHeader = () => {
  const { pathname } = useLocation();

  const pageName = (location: string) => {
    let name;
    if (location === '/') name = 'Coins';
    if (location === '/portfolio') name = location.slice(1);
    if (location.slice(0, 5) === '/coin') name = 'Summary';
    return name;
  };

  return (
    <Header>
      <Title>{pageName(pathname)}</Title>
    </Header>
  );
};
