import styled from 'styled-components';
import { devices } from 'utils';

export const Container = styled.div`
  padding: 0 2em;
  max-width: 1920px;
  margin: 0 auto;
  transition-property: font-size;
  transition-duration: 4s;
  transition-delay: 2s;

  @media ${devices.desktop} {
    padding: 1em 5em;
  }
`;

export const Subtitle = styled.h3`
  font-weight: 400;
  font-size: 1rem;
  text-align: start;
  margin-top: 2em;
`;

export const ChartContainer = styled.div`
  margin-top: 2em;
  width: 100%;
  background: ${({ theme }) => theme.foreground};
  border-radius: 8px;
  padding: 0.5em;
  height: 35vh;
  max-width: 840px;
  max-height: 450px;
  @media (min-width: 650px) {
    height: 34vw;
  }
`;

export const ChartWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  ${({ isVisible }) =>
    isVisible
      ? `#bar-chart { display: none; }`
      : `#line-chart { display: none; }`}
  @media (min-width: 650px) {
    display: flex;
    flex-direction: row;
    #line-chart,
    #bar-chart {
      width: 48%;
      display: flex;
    }
  }
`;

export const CoinListContainer = styled.div`
  margin-top: 1.25em;
  background: ${({ theme }) => theme.foreground};
  padding: 1.5em 1em;
  margin-bottom: 6em;
`;
