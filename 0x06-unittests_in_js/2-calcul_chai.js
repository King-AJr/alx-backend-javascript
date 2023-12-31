const calculateNumber = (type, a, b) => {
  let result = 0;
  if (type === 'SUM') {
    result = Math.round(a) + Math.round(b);
  } else if (type === 'SUBTRACT') {
    result = Math.round(a) - Math.round(b);
  } else if (type === 'DIVIDE') {
    result = Math.round(a) / Math.round(b);
  }
  return result;
};

module.exports = calculateNumber;
