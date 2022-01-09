import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { addZero } from 'utils';
import { ChartsLegend } from 'components';
import { ChartsWrapper } from './Charts.styles';
import { chartOptions, smallChartOption } from './ChartsOptions';
import { withTheme } from 'styled-components';
class Charts extends Component {
  render() {
    const chartDataTimes = (time) =>
      Array.isArray(this.props.chartData) &&
      this.props.chartData.map((coin) => {
        const date = new Date(coin.x);

        return time === 'day'
          ? date.getDate()
          : time === 'hour'
          ? addZero(date.getHours())
          : null;
      });

    const arrOfData =
      this.props.chartData && this.props.chartData.map((coin) => coin.y);

    const barChartData = {
      labels: chartDataTimes('day'),

      datasets: [
        {
          data: arrOfData,
          fill: false,
          backgroundColor: this.props.theme.barChart,
          borderColor: this.props.theme.barChart,
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
          gradient.addColorStop(0, this.props.theme.chartsGradient.start);
          gradient.addColorStop(0.5, this.props.theme.chartsGradient.middle);
          gradient.addColorStop(1, this.props.theme.chartsGradient.end);
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
            borderColor: this.props.theme.lineChart,
            borderRadius: '5',
            tension: 0.5,
            pointBackgroundColor: 'transparent',
            pointBorderColor: 'transparent'
          }
        ]
      };
    };
    const smallLineChartData = {
      labels: new Array(this.props.smallChartData?.length).fill(''),
      datasets: [
        {
          label: '',
          data: this.props.smallChartData,
          fill: false,
          borderColor: this.props.weeklyChanges > 0 ? '#00FF5F' : '#FE1040',
          tension: 0.5,
          pointBackgroundColor: 'transparent',
          pointBorderColor: 'transparent'
        }
      ]
    };

    const renderChart = () => {
      if (this.props.lineChart)
        return (
          <Line
            data={lineChartData}
            options={chartOptions}
            plugins={pluginsConfig}
          />
        );
      if (this.props.barChart)
        return <Bar data={barChartData} options={chartOptions} />;
      if (this.props.smallLineChart)
        return <Line data={smallLineChartData} options={smallChartOption} />;
      return 'Missing Information';
    };
    return (
      <ChartsWrapper>
        {!this.props.smallLineChart ? (
          <ChartsLegend
            latestData={this.props.latestData}
            currency={this.props.currency}
            lineChart={this.props.lineChart}
            show={this.props.show}
          />
        ) : null}
        {renderChart()}
      </ChartsWrapper>
    );
  }
}
Charts.defaultProps = {
  barChart: false,
  lineChart: false,
  smallLineChart: false
};

export default withTheme(Charts);
