import React from 'react';
import { Line } from 'react-chartjs-2';
import { smallChartOption } from './ChartsOptions';

interface SmallChartProps {
  chartData: {
    x: number;
    y: number;
  }[];
  weeklyChanges: number;
}
export const SmallChart = (props: SmallChartProps) => {
  const smallLineChartData = {
    labels: new Array(props.chartData?.length).fill(''),
    datasets: [
      {
        label: '',
        data: props.chartData,
        fill: false,
        borderColor: props.weeklyChanges! > 0 ? '#00FF5F' : '#FE1040',
        tension: 0.5,
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent'
      }
    ]
  };
  return <Line data={smallLineChartData} options={smallChartOption} />;
};
