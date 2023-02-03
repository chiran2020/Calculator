// Import stylesheets
import './style.css';

// let firstnum = prompt('Enter First number');
// let secnum = prompt('Enter second number');

// let firstnum = 10;
// let secnum = 5;

// Pull elements from HTML

let Total = document.querySelector('#total'); // To display results
let AddBtn = document.querySelector('#btn'); // Add button
let subractBtn = document.querySelector('#subBtn'); // Subract button
let divideBtn = document.querySelector('#divide'); // Divide button
let multiplyBtn = document.querySelector('#multiply'); // Multiply button
let total = 'Answer: '; // To show Total: and results. add this with TextContent

// ADD
let add = function () {
  //.valueAsNumber Only Works IF HTML Input type is "Number"
  let firstnum = document.getElementById('firstnum').valueAsNumber;
  let secnum = document.getElementById('secnumber').valueAsNumber;
  let add = firstnum + secnum;
  if ((firstnum >= 0) & (secnum >= 0)) {
    Total.textContent = total + add;
  } else if (firstnum >= 0) {
    Total.textContent = ' Please Enter Second Number Too!';
  } else if (secnum >= 0) {
    Total.textContent = ' Please Enter First Number Too!';
  } else {
    Total.textContent = ' Please Enter Number Above!';
  }
};
AddBtn.addEventListener('click', add);

// SUBRACT
let subtract = function () {
  let firstnum = document.getElementById('firstnum').valueAsNumber;
  let secnum = document.getElementById('secnumber').valueAsNumber;
  let sub = firstnum - secnum;
  if ((firstnum >= 0) & (secnum >= 0)) {
    Total.textContent = total + sub;
  } else if (firstnum >= 0) {
    Total.textContent = ' Please Enter Second Number Too!';
  } else if (secnum >= 0) {
    Total.textContent = ' Please Enter First Number Too!';
  } else {
    Total.textContent = ' Please Enter Number Above!';
  }
};
subractBtn.addEventListener('click', subtract);

// DIVIDE
// let divide = function () {
//   let firstnum = document.getElementById('firstnum').valueAsNumber;
//   let secnum = document.getElementById('secnumber').valueAsNumber;
//   let divide = firstnum / secnum;
//   let RoundToTwoDecimal = divide.toFixed(2);
//   Total.textContent = total + RoundToTwoDecimal;
// };
// divideBtn.addEventListener('click', divide);

let divide = function () {
  let firstnum = document.getElementById('firstnum').valueAsNumber;
  let secnum = document.getElementById('secnumber').valueAsNumber;
  let divide = firstnum / secnum;

  if ((firstnum >= 0) & (secnum >= 0)) {
    Total.textContent = total + divide;
  } else if (firstnum >= 0) {
    Total.textContent = ' Please Enter Second Number Too!';
  } else if (secnum >= 0) {
    Total.textContent = ' Please Enter First Number Too!';
  } else {
    Total.textContent = ' Please Enter Number Above!';
  }
};
divideBtn.addEventListener('click', divide);

// MULTIPLY
// let multiply = function () {
//   let firstnum = document.getElementById('firstnum').valueAsNumber;
//   let secnum = document.getElementById('secnumber').valueAsNumber;
//   let multiply = firstnum * secnum;
//   Total.textContent = total + multiply;
// };
// multiplyBtn.addEventListener('click', multiply);

let multiply = function () {
  let firstnum = document.getElementById('firstnum').valueAsNumber;
  let secnum = document.getElementById('secnumber').valueAsNumber;
  let multiply = firstnum * secnum;
  if ((firstnum >= 0) & (secnum >= 0)) {
    Total.textContent = total + multiply;
  } else if (firstnum >= 0) {
    Total.textContent = ' Please Enter Second Number Too!';
  } else if (secnum >= 0) {
    Total.textContent = ' Please Enter First Number Too!';
  } else {
    Total.textContent = ' Please Enter Number Above!';
  }
};
multiplyBtn.addEventListener('click', multiply);
