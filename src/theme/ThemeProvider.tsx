import React from 'react';
import { useAppSelector } from 'store/hooks';
import { ThemeProvider as Provider } from 'styled-components';

export const dark = {
  general: '#FFFFFF',
  background: '#1F2128',
  foreground: '#191B1F',
  lineChart: '#1AD761',
  barChart: '#2172E5',
  chartsGradient: {
    start: 'rgba(255,255,255,0.20)',
    middle: 'rgba(128,255,175,0.10)',
    end: 'rgba(0,255,95,0)'
  }
};

export const light = {
  general: '#2C2F36',
  background: '#FCFCFC',
  foreground: '#FFFFFF',
  lineChart: '#2550EA',
  barChart: '#1AD761',
  chartsGradient: {
    start: 'rgba(37,80,234,0.4)',
    middle: 'rgba(37,80,234,0.2)',
    end: 'rgba(37,80,234,0.01)'
  }
};

export const ThemeProvider = ({
  children
}: {
  children: React.ReactChild[];
}) => {
  const themeMode = useAppSelector((state) => state.theme);
  const theme = themeMode === 'dark' ? dark : light;
  return <Provider theme={theme}>{children}</Provider>;
};
