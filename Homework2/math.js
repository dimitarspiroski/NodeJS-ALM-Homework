const sum = (n1, n2) => {
  return n1 + n2;
};

const subtract = (n1, n2) => {
  return n1 - n2;
};

const multiply = (n1, n2) => {
  return n1 * n2;
};

const divide = (n1, n2) => {
  return n2 !== 0 ? n1 / n2 : "Dividing by 0 is not valid.";
};

module.exports = {
  sum,
  subtract,
  multiply,
  divide,
};
