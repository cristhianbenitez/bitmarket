import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    general: string;
    background: string;
    foreground: string;
    lineChart: string;
    barChart: string;
    chartsGradient: {
      start: string;
      middle: string;
      end: string;
    };
  }
}
