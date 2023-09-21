const calculateNumber = (a, b, type) => {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  }
  if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }
  if (type === 'DIVIDE' && Math.round(b) !== 0) {
    return Math.round(a) / Math.round(b);
  }
  return null;
};
module.exports = calculateNumber;
