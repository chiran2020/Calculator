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
  Total.textContent = total +  add;
};
AddBtn.addEventListener('click', add);

// SUBRACT
let subtract = function () {
  let firstnum = document.getElementById('firstnum').valueAsNumber;
  let secnum = document.getElementById('secnumber').valueAsNumber;
  let sub = firstnum - secnum;
  Total.textContent = total + sub;
};
subractBtn.addEventListener('click', subtract);

// DIVIDE
let divide = function () {
  let firstnum = document.getElementById('firstnum').valueAsNumber;
  let secnum = document.getElementById('secnumber').valueAsNumber;
  let divide = firstnum / secnum;
  let  RoundToTwoDecimal = divide.toFixed(2)
  Total.textContent = total +  RoundToTwoDecimal;
};
divideBtn.addEventListener('click', divide);

// MULTIPLY
let multiply = function () {
  let firstnum = document.getElementById('firstnum').valueAsNumber;
  let secnum = document.getElementById('secnumber').valueAsNumber;
  let multiply = firstnum * secnum;
  Total.textContent = total + multiply;
};
multiplyBtn.addEventListener('click', multiply);
