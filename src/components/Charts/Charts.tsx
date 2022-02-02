import { Bar, Line } from 'react-chartjs-2';
import { addZero } from 'utils';
import { ChartsLegend } from 'components';
import { useTheme } from 'styled-components';

import { ChartsWrapper } from './Charts.styles';
import { chartOptions } from './ChartsOptions';
interface ILatestData {
  latestCoinPrice: {
    x: number;
    y: number;
  };
  latestVolume24h: {
    x: number;
    y: number;
  };
}
interface ChartsProps {
  type: 'lineChart' | 'barChart';
  chartData: {
    x: number;
    y: number;
  }[];
  latestData?: ILatestData;
  currency?: string;
  weeklyChanges?: number;
  changeVisibility?: () => void;
}

export const Charts = (props: ChartsProps) => {
  const theme = useTheme();

  const latestPrices = {
    Volume24h: props.latestData?.latestVolume24h?.y as number,
    CoinPrice: props.latestData?.latestCoinPrice?.y as number
  };

  const chartDataTimes = (time: string) =>
    props.chartData.map((coin) => {
      const date = new Date(coin.x);
      if (time === 'day') return date.getDate();
      if (time === 'hour') return addZero(date.getHours());
      return null;
    });

  const pluginsConfig = [
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

  const barChartData = {
    labels: chartDataTimes('day'),
    datasets: [
      {
        data: arrOfData,
        fill: false,
        backgroundColor: theme.barChart,
        borderColor: theme.barChart,
        borderRadius: 2,
        maxBarThickness: 20
      }
    ]
  };

  const lineChartData = {
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

  const renderChart = (chartType: string) => {
    switch (chartType) {
      case 'lineChart':
        return (
          <Line
            data={lineChartData}
            options={chartOptions}
            //@ts-expect-error (charts.js error non-relevant)
            plugins={pluginsConfig}
          />
        );
      case 'barChart':
        return <Bar data={barChartData} options={chartOptions} />;
      default:
        return null;
    }
  };

  return (
    <ChartsWrapper>
      <ChartsLegend
        changeVisibility={props.changeVisibility}
        latestPrices={latestPrices}
        currency={props.currency!}
        lineChart={props.type === 'lineChart'}
      />
      {renderChart(props.type)}
    </ChartsWrapper>
  );
};
