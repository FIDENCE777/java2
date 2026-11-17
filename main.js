const result = document.getElementById("result");
result.textContent = 0;

let firstNumber = 0;
let secondNumber = 0;
let action = null;

const getNumber = (number) => {
  if (action && firstNumber > 0) {
    secondNumber = secondNumber * 10 + number;
    result.textContent = secondNumber;
  } else {
    firstNumber = firstNumber * 10 + number;
    result.textContent = firstNumber;
  }
};

const getAction = (uildel) => {
  action = uildel;
};
const showResult = () => {
  if (action === "nemeh") {
    hariu = firstNumber + secondNumber;
    result.textContent = hariu;
    action = null;
    firstNumber = hariu;
    secondNumber = 0;
  } else if (action === "hasah") {
    hariu = firstNumber - secondNumber;
    result.textContent = hariu;
    action = null;
    firstNumber = hariu;
  } else if (action === "urjih") {
    hariu = firstNumber * secondNumber;
    result.textContent = hariu;
    action = null;
    firstNumber = hariu;
    secondNumber = 0;
  } else if (action === "huvaah") {
    hariu = firstNumber / secondNumber;
    result.textContent = hariu;
    action = null;
    firstNumber = hariu;
    secondNumber = 0;
  }
};
const allclear = () => {
  result.textContent = 0;
  firstNumber = 0;
  secondNumber = 0;
  action = null;
};
