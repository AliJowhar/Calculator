"use strict";
const display = document.getElementById("screen");
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const numberBtns = document.querySelectorAll("button");

let firstNumber = null;
let operator = null;
let secondNumber = null;

// basic math operators

// addition
const add = function (a, b) {
  return a + b;
};

// subtract
const subtract = function (a, b) {
  return a - b;
};

// multiply
const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const operate = function (num1, num2, operator) {
  return operator(num1, num2);
};

// Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.

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
