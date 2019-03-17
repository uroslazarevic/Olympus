const calculateSharePercentageInTotal = (total, share) => {
  const percentage = (parseInt(share, 10) / parseInt(total, 10)) * 100;
  return percentage.toFixed(2);
};

export default calculateSharePercentageInTotal;
