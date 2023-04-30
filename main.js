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

// basic math operators

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
  firstNumber = "";
  operator = "";

  firstNumber += display.textContent;
  operator = add;

  display.textContent = "";
});

minusBtn.addEventListener("click", function () {
  firstNumber = "";
  operator = "";

  firstNumber += display.textContent;
  operator = subtract;

  display.textContent = "";
});

multiplyBtn.addEventListener("click", function () {
  firstNumber = "";
  operator = "";

  firstNumber += display.textContent;
  operator = multiply;

  display.textContent = "";
});
divideBtn.addEventListener("click", function () {
  firstNumber = "";
  operator = "";

  firstNumber += display.textContent;
  operator = divide;

  display.textContent = "";
});

equalsBtn.addEventListener("click", function () {
  secondNumber = "";
  secondNumber += display.textContent;
  console.log(`First number: ${firstNumber}`);
  console.log(`Second number: ${secondNumber}`);

  if (firstNumber)
    display.textContent = operate(firstNumber, secondNumber, operator);
  firstNumber = "";
  secondNumber = "";
});
