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
