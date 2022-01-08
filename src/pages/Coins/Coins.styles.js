import styled from 'styled-components';
import { devices } from 'utils';

export const Container = styled.div`
  padding: 0 4em;
  max-width: 1920px;
  margin: 0 auto;
`;

export const Subtitle = styled.h3`
  font-weight: 400;
  font-size: 1rem;
  text-align: start;
  margin-top: 2em;
`;

export const ChartContainer = styled.div`
  margin-top: 2em;
  width: 45%;
  background: ${({ theme }) => theme.foreground};
  border-radius: 8px;
  padding: 1em;
  height: 250px;
`;

export const ChartWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const CoinListContainer = styled.div`
  margin-top: 1.25em;
  background: ${({ theme }) => theme.foreground};
  padding: 1.5em 1em;
  margin-bottom: 6em;
`;
