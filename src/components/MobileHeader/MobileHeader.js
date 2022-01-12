import React, { Component } from 'react';
import { Header, Title } from './MobileHeader.styles';
import { useLocation } from 'react-router-dom';

export const MobileHeader = () => {
  const { pathname } = useLocation();

  const pageName = (location) => {
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
