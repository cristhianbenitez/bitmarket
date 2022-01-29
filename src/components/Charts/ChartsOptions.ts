import { getOrdinalNum } from 'utils';

interface TitleProps {
  label: string;
  dataset: {
    label: string;
  };
}

interface LabelContext {
  formattedValue: string;
}

const tooltip = {
  displayColors: false,
  displayTitle: false,
  callbacks: {
    title: (props: any) => {
      const { label, dataset }: TitleProps = props[0];
      const day = label;
      const lineChartLabel = dataset.label;
      if (lineChartLabel === 'Price') return `${lineChartLabel} at ${label}:00`;

      return `24h Volume on the ${getOrdinalNum(day)}`;
    },
    label: (context: LabelContext) => {
      return `$${context.formattedValue}`;
    }
  }
};

export const chartOptions: any = {
  layout: {
    padding: {
      top: 100
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
