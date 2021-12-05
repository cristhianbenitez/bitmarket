import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { addZero } from 'Utils';
import { ChartsLegend } from 'Components';
import { ChartsWrapper } from './Charts.styles';
import { chartOptions, smallChartOption } from './ChartsOptions';

export class Charts extends Component {
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
          backgroundColor: '#2172E5',
          borderColor: '#2172E5',
          borderRadius: '2',
          barThickness: 14,
          maxBarThickness: 18
        }
      ]
    };

    const lineChartData = (canvas) => {
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createLinearGradient(0, 0, 0, 250);
      gradient.addColorStop(0, 'rgba(0,255,95,0.175)');
      gradient.addColorStop(1, 'rgba(0,255,95,0)');

      return {
        labels: chartDataTimes('hour'),

        datasets: [
          {
            label: 'Price',
            data: arrOfData,
            fill: true,
            borderColor: '#00FF5F',
            backgroundColor: gradient,
            borderRadius: '2',
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
        return <Line data={lineChartData} options={chartOptions} />;
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
