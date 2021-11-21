import { getOrdinalNum } from '../../Utils';

const tooltip = {
  displayColors: false,
  displayTitle: false,
  callbacks: {
    title: (props) => {
      const day = props[0].label;
      const lineChartLabel = props[0].dataset.label;
      if (lineChartLabel === 'Bitcoin Price')
        return `${lineChartLabel} at ${props[0].label}:00`;
      else return `24h Volume on the ${getOrdinalNum(day)}`;
    },
    label: (context) => {
      return `$${context.formattedValue}`;
    }
  }
};
export const barChartOptions = {
  layout: {
    padding: {
      top: 85,
      right: 10,
      bottom: 10,
      left: 10
    }
  },

  plugins: {
    legend: {
      display: false
    },
    tooltip
  },
  animation: {
    duration: 2000
  },
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    y: {
      display: false
    },
    x: {
      ticks: {
        font: {
          size: 10
        },
        autoSkip: true,
        maxRotation: 0,
        minRotation: 0
      }
    }
  }
};
