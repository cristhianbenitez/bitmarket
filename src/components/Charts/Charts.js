import { Bar, Line } from 'react-chartjs-2';
import { addZero } from 'utils';
import { ChartsLegend } from 'components';
import { ChartsWrapper } from './Charts.styles';
import { chartOptions, smallChartOption } from './ChartsOptions';
import { useTheme } from 'styled-components';

export const Charts = (props) => {
  const theme = useTheme();
  const chartDataTimes = (time) =>
    Array.isArray(props.chartData) &&
    props.chartData.map((coin) => {
      const date = new Date(coin.x);

      return time === 'day'
        ? date.getDate()
        : time === 'hour'
        ? addZero(date.getHours())
        : null;
    });

  const arrOfData = props.chartData && props.chartData.map((coin) => coin.y);

  const barChartData = {
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

  const pluginsConfig = [
    {
      afterLayout: (chart) => {
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

  const lineChartData = () => {
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
  const smallLineChartData = {
    labels: new Array(props.smallChartData?.length).fill(''),
    datasets: [
      {
        label: '',
        data: props.smallChartData,
        fill: false,
        borderColor: props.weeklyChanges > 0 ? '#00FF5F' : '#FE1040',
        tension: 0.5,
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent'
      }
    ]
  };

  const renderChart = () => {
    if (props.lineChart)
      return (
        <Line
          data={lineChartData}
          options={chartOptions}
          plugins={pluginsConfig}
        />
      );
    if (props.barChart)
      return <Bar data={barChartData} options={chartOptions} />;
    if (props.smallLineChart)
      return <Line data={smallLineChartData} options={smallChartOption} />;
    return 'Missing Information';
  };

  if (!props) return;
  return (
    <ChartsWrapper>
      {!props.smallLineChart && (
        <ChartsLegend
          latestData={props.latestData}
          currency={props.currency}
          lineChart={props.lineChart}
          show={props.show}
        />
      )}
      {renderChart()}
    </ChartsWrapper>
  );
};

Charts.defaultProps = {
  barChart: false,
  lineChart: false,
  smallLineChart: false
};
