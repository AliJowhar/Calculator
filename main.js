"use strict";
const display = document.getElementById("screen");
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const numberBtns = document.querySelectorAll("button");

const firstNumber = 0;
const operator = "";
const secondNumber = 0;

numberBtns.forEach(function (btns) {
  btns.addEventListener("click", function () {
    if (btns.id === "btn-0") {
      display.textContent = "Button 0 ";
    } else if (btns.id === "btn-1") {
      console.log("Button 1 clicked!");
    } else if (btns.id === "btn-2") {
      console.log("Button 2 clicked!");
    } else if (btns.id === "btn-3") {
      console.log("Button 3 clicked!");
    } else if (btns.id === "btn-4") {
      console.log("Button 4 clicked!");
    } else if (btns.id === "btn-5") {
      console.log("Button 5 clicked!");
    } else if (btns.id === "btn-6") {
      console.log("Button 6 clicked!");
    } else if (btns.id === "btn-7") {
      console.log("Button 7 clicked!");
    } else if (btns.id === "btn-8") {
      console.log("Button 8 clicked!");
    } else if (btns.id === "btn-9") {
      console.log("Button 9 clicked!");
    }
  });
});

// basic math operators

// addition
const add = function (numbers) {
  return numbers.reduce((total, num) => total + num, 0);
};

// subtract
const subtract = function (a, b) {
  return a - b;
};

// multiply
const multiply = function (array) {
  return array.length
    ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;
};

const divide = function (a, b) {
  return a / b;
};
