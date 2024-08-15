function add(a, b) {
  return +a + +b;
}

function subtract(a, b) {
  return +a - +b;
}

function multiply(a, b) {
  return +a * +b;
}

function divide(a, b) {
  return (+a / +b).toFixed(2);
}

let operandA = "";
let operator = "";
let operandB = "";

function operate(operator, operandA, operandB) {
  let result = 0;
  switch (operator) {
    case "+":
      result = add(operandA, operandB);
      break;
    case "-":
      result = subtract(operandA, operandB);
      break;
    case "*":
      result = multiply(operandA, operandB);
      break;
    case "/":
      result = divide(operandA, operandB);
      break;
  }
  return result;
}

const display = document.querySelector("#displayText");
const numberBtns = document.querySelectorAll(".numBtn");

numberBtns.forEach((numBtn) => {
  numBtn.addEventListener("click", (event) => {
    if (!(operator)) {
      operandA += event.target.textContent;
      display.textContent = operandA;
    }
    else {
      display.textContent = "";
      operandB += event.target.textContent;
      display.textContent = operandB;
    }
  });
});

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", (event) => {
  operandA = "";
  operandB = "";
  operator = "";
  display.textContent = "";
});

const oprBtns = document.querySelectorAll(".oprBtns.opr");
oprBtns.forEach((operation) => {
  operation.addEventListener("click", (event) => {
    if (!(operator))
      operator = event.target.textContent;
    else {
      let result = operate(operator, operandA, operandB);
      display.textContent = result;
      operandA = result;
      operator = event.target.textContent;
      operandB = "";
    }
  });
})

const eqlBtn = document.querySelector(".oprBtns.equal");
eqlBtn.addEventListener("click", (event) => {
  const result = operate(operator, operandA, operandB);
  display.textContent = result;
});