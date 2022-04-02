const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const divide = function(num1, num2) {
    return num1 / num2;
}

const sum = function(sumArray) {
  return sumArray.reduce((previousValue, currentValue) => previousValue + currentValue,
    0);
};


const multiply = function(theArray) {
  return theArray.reduce((previousValue, currentValue) => previousValue * currentValue,
    1);
};

const power = function(num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function(num) {
    let fact = 1;
    if (num === 0)
        return 1;
    else {
        for (let i = num; i > 0; i--) {
        fact = fact * i;
        }
        return fact;
    }
};