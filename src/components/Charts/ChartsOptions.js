import { getOrdinalNum } from 'utils';

const tooltip = {
  displayColors: false,
  displayTitle: false,
  callbacks: {
    title: (props) => {
      const day = props[0].label;
      const lineChartLabel = props[0].dataset.label;
      if (lineChartLabel === 'Price')
        return `${lineChartLabel} at ${props[0].label}:00`;
      else return `24h Volume on the ${getOrdinalNum(day)}`;
    },
    label: (context) => {
      return `$${context.formattedValue}`;
    }
  }
};

export const chartOptions = {
  layout: {
    padding: {
      top: 100,
      right: 40,
      bottom: 0,
      left: 40
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
      grid: {
        color: 'transparent'
      },
      ticks: {
        font: {
          size: 12
        },
        maxRotation: 0,
        minRotation: 0
      }
    }
  }
};

export const smallChartOption = {
  plugins: {
    legend: {
      display: false
    }
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
      display: false
    }
  }
};
