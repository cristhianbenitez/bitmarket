import { Bar, Line } from 'react-chartjs-2';
import { addZero } from 'utils';
import { ChartsLegend } from 'components';
import { useTheme } from 'styled-components';

import { ChartsWrapper } from './Charts.styles';
import { chartOptions, smallChartOption } from './ChartsOptions';

interface ChartsProps {
  type: 'lineChart' | 'barChart' | 'smallLineChart';
  chartData: {
    x: number;
    y: number;
  }[];
  latestData?: {};
  currency?: string;
  weeklyChanges?: any;
}

export const Charts = (props: ChartsProps) => {
  const theme = useTheme();

  const chartDataTimes = (time: string) =>
    Array.isArray(props.chartData) &&
    props.chartData.map((coin) => {
      const date = new Date(coin.x);

      return time === 'day'
        ? date.getDate()
        : time === 'hour'
        ? addZero(date.getHours())
        : null;
    });

  const pluginsConfig: any = [
    {
      afterLayout: (chart: any) => {
        let ctx = chart.ctx;
        ctx.save();
        let yAxis = chart.scales.y;
        let gradient = ctx.createLinearGradient(0, 0, 0, yAxis.bottom);
        gradient.addColorStop(0, theme.chartsGradient.start);
        gradient.addColorStop(0.5, theme.chartsGradient.middle);
        gradient.addColorStop(1, theme.chartsGradient.end);
        if (chart.data.datasets[0]) {
          chart.data.datasets[0].backgroundColor = gradient;
          ctx.restore();
        }
      }
    }
  ];

  const arrOfData = props.chartData && props.chartData.map((coin) => coin.y);

  const barChartData: any = {
    labels: chartDataTimes('day'),
    datasets: [
      {
        data: arrOfData,
        fill: false,
        backgroundColor: theme.barChart,
        borderColor: theme.barChart,
        borderRadius: '2',
        maxBarThickness: 20
      }
    ]
  };

  const lineChartData: any = () => {
    return {
      labels: chartDataTimes('hour'),
      datasets: [
        {
          label: 'Price',
          data: arrOfData,
          fill: true,
          borderColor: theme.lineChart,
          borderRadius: '5',
          tension: 0.5,
          pointBackgroundColor: 'transparent',
          pointBorderColor: 'transparent'
        }
      ]
    };
  };

  const smallLineChartData: any = {
    labels: new Array(props.chartData?.length).fill(''),
    datasets: [
      {
        label: '',
        data: props.chartData,
        fill: false,
        borderColor: props.weeklyChanges > 0 ? '#00FF5F' : '#FE1040',
        tension: 0.5,
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent'
      }
    ]
  };

  const renderChart = () => {
    if (props.type === 'lineChart')
      return (
        <Line
          data={lineChartData}
          options={chartOptions}
          plugins={pluginsConfig}
        />
      );
    if (props.type === 'barChart')
      return <Bar data={barChartData} options={chartOptions} />;
    if (props.type === 'smallLineChart')
      return <Line data={smallLineChartData} options={smallChartOption} />;
    return null;
  };

  if (!props) return null;
  return (
    <ChartsWrapper>
      {props.type !== 'smallLineChart' && (
        <ChartsLegend
          latestData={props.latestData}
          currency={props.currency}
          lineChart={props.type === 'lineChart'}
        />
      )}
      {renderChart()}
    </ChartsWrapper>
  );
};
