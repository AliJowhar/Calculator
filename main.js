"use strict";
const display = document.getElementById("screen");
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const numberBtns = document.querySelectorAll("#btn-num");
const equals = document.getElementById("equal");

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
  return operator(num1, num2);
};

const populateDisplay = function () {
  numberBtns.forEach(function (btns) {
    btns.addEventListener("click", function () {
      const currentDisplalyValue =
        document.getElementById("screen").textContent;
      const newDisplayValue = currentDisplalyValue + btns.textContent;
      display.textContent = newDisplayValue;

      if (btns.textContent == "+") {
        firstNumber = newDisplayValue;
        console.log(firstNumber);
      }
    });
  });
};
populateDisplay();
