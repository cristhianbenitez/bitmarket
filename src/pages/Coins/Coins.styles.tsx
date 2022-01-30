import styled from 'styled-components';
import { devices } from 'utils';

export const Container = styled.div`
  padding: 0 0.5em;
  max-width: 1920px;
  margin: auto;
  transition-property: font-size;
  transition-duration: 4s;
  transition-delay: 2s;
  @media ${devices.tablet} {
    padding: 1em 2em;
  }
  @media ${devices.desktop} {
    padding: 1em 5em;
  }
`;

export const Subtitle = styled.p`
  display: none;
  @media ${devices.tablet} {
    display: block;
    font-weight: 400;
    font-size: 1rem;
    text-align: start;
    &:first-child {
      margin-top: 0;
    }
    margin-top: 4em;
  }
`;

export const ChartContainer = styled.div`
  margin-top: 2em;
  width: 100%;
  border-radius: 8px;
  padding: 0.5em;
  height: 229px;
  max-width: 840px;
  max-height: 450px;
  background: #2c2d33;

  @media ${devices.tablet} {
    background: ${({ theme }) => theme.foreground};
    height: 35vh;
    @media (min-width: 650px) {
      height: 25vw;
    }
  }
`;

export const ChartWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  ${(props: { isVisible: boolean }) =>
    props.isVisible
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
  padding: 1.5em 1em;
  margin-bottom: 1em;
  border-radius: 6px;
  background: #171821;
  @media ${devices.tablet} {
    background: ${({ theme }) => theme.foreground};
    margin-bottom: 4em;
  }
`;
