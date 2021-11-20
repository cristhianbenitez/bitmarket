import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';

export const Container = styled.div`
  padding: 0 3em;
`;
export const Subtitle = styled.h3`
  font-weight: 400;
  font-size: 1.375rem;
  text-align: start;
`;
export const ChartsContainer = styled.div`
  margin-top: 2em;
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const ChartWrapper = styled.div`
  margin: 0 auto;
  width: 40%;
  height: 250px;
  background: #191b1f;
  border-radius: 8px;
  padding: 2em 3em;
  &:first-child {
    margin-right: 3em;
  }
`;
export const LineChart = styled(Line)``;
export const BarChart = styled(Bar)``;
