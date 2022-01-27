<<<<<<< HEAD:src/components/Theme/Theme.ts
export const dark = {
=======
import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
>>>>>>> ce4bb9b221d51f993cf8455ce660d335b07a1423:src/components/Theme/Themes.ts
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
