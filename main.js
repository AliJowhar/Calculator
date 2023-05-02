"use strict";
const display = document.getElementById("screen");
const numberBtns = document.querySelectorAll("#btn-num");
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const divideBtn = document.getElementById("divide");
const multiplyBtn = document.getElementById("multiply");

const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const equalsBtn = document.getElementById("equal");

let firstNumber = null;
let operator = null;
let secondNumber = null;
let result = null;

// Basic math operators

const add = function (a, b) {
  return a + b;
};
const subtract = function (a, b) {
  return a - b;
};
const multiply = function (a, b) {
  return a * b;
};
const divide = function (a, b) {
  return a / b;
};
const operate = function (num1, num2, operator) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  return operator(num1, num2);
};
const populateDisplay = function () {
  numberBtns.forEach(function (btns) {
    btns.addEventListener("click", function () {
      const currentDisplalyValue =
        document.getElementById("screen").textContent;
      const newDisplayValue = currentDisplalyValue + btns.textContent;
      display.textContent = newDisplayValue;
    });
  });
};
populateDisplay();

plusBtn.addEventListener("click", function () {
  if (firstNumber !== null) {
    // If a first number exists, perform the previous calculation before moving on to the next one
    secondNumber = display.textContent;
    result = operate(firstNumber, secondNumber, operator);
    firstNumber = result;
    operator = add;
    display.textContent = "";
  } else {
    firstNumber = display.textContent;
    operator = add;
    display.textContent = "";
  }
});

minusBtn.addEventListener("click", function () {
  if (firstNumber !== null) {
    secondNumber = display.textContent;
    result = operate(firstNumber, secondNumber, operator);
    firstNumber = result;
    operator = subtract;
    display.textContent = "";
  } else {
    firstNumber = display.textContent;
    operator = subtract;
    display.textContent = "";
  }
  console.log(`firstNumber: ${firstNumber}`);
  console.log(`secondNumber: ${secondNumber}`);
  console.log(`result: ${result}`);
});

multiplyBtn.addEventListener("click", function () {
  if (firstNumber !== null) {
    secondNumber = display.textContent;
    result = operate(firstNumber, secondNumber, operator);
    firstNumber = result;
    operator = multiply;
    display.textContent = "";
  } else {
    firstNumber = display.textContent;
    operator = multiply;
    display.textContent = "";
  }
});
divideBtn.addEventListener("click", function () {
  if (firstNumber !== null) {
    secondNumber = display.textContent;
    result = operate(firstNumber, secondNumber, operator);
    firstNumber = result;
    operator = divide;
    display.textContent = "";
  } else {
    firstNumber = display.textContent;
    operator = divide;
    display.textContent = "";
  }
});

equalsBtn.addEventListener("click", function () {
  if (firstNumber !== null) {
    secondNumber = parseFloat(display.textContent);
    result = operate(firstNumber, secondNumber, operator);
    display.textContent = result;
    firstNumber = result;

    firstNumber = null;
    secondNumber = null;
  }
});

clearBtn.addEventListener("click", function () {
  firstNumber = null;
  secondNumber = null;
  display.textContent = "";
  operator = null;
  result = null;
});
