import numeral from 'numeral';

export const addZero = (i) => {
  // Add zero to the hours
  if (i < 10) {
    i = '0' + i;
  }
  return i;
};

export const getOrdinalNum = (n) => {
  return (
    n +
    (n > 0
      ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
      : '')
  );
};

export const formattedNumber = (num, format) => {
  return numeral(num).format(format).toUpperCase();
};

export const todayDate = new Date()
  .toString()
  .split(' ')
  .splice(1, 3)
  .join(' ');

export const displayPositiveNumber = (num) => {
  const posNum = num < 0 ? num * -1 : num;
  return posNum.toFixed(1);
};

export const calculatePercentage = (a, b) => {
  const sum = a + b;
  const percentageA = ((a / sum) * 100).toFixed(0);
  const percentageB = ((b / sum) * 100).toFixed(0);
  return { percentageA: percentageA, percentageB: percentageB };
};
