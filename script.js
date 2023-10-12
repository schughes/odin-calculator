const operators = ["/", "*", "+", "-"];
const States = {
  VALID: "Valid",
  OPERATOR_ERROR: "Invalid Operator",
  FORMAT_ERROR: "Invalid Format",
  REPLACE_OPERATOR: "Replace Operator",
};
function showValue() {
  function validate(val) {
    let expr = expression.textContent;
    let currVal = expr[expr.length - 1];
    if (val === ".") {
      // cant add two dots in a row
      if (currVal == ".") {
        return States.FORMAT_ERROR;
      }
    } else if (operators.includes(val)) {
      if (currVal == null) {
        if (val != "-") {
          return States.OPERATOR_ERROR;
        } else {
          return States.VALID;
        }
      }

      if (operators.includes(currVal)) {
        // cant have two operators unless one it is the minus sign
        if (currVal == val) {
          return States.FORMAT_ERROR;
        } else if (val == "-") {
          return States.VALID;
        }
        return States.REPLACE_OPERATOR;
      }
    }
    return States.VALID;
  }

  let val = this.getAttribute("val");
  switch (validate(val)) {
    case States.VALID:
      expression.textContent += val;
      break;
    case States.REPLACE_OPERATOR:
      expression.textContent = expression.textContent.slice(0, -1) + val;
      break;
  }
}

function clearDisplay() {
  expression.textContent = "";
}

function evaluateDisplay() {
  function evalPercent(equation) {
    let percentages = equation.match(/\d+%/g);
    // console.log("PERCENTAGES", percentages);
    if (percentages) {
      percentages.forEach((percent) => {
        let numericValue = parseFloat(percent) / 100;
        equation = equation.replace(percent, numericValue);
      });
    }
    return equation;
  }

  let equation = expression.textContent;
  console.log(equation);

  equation = evalPercent(equation);
  console.log(equation);

  let result = eval(equation);
  if (result % 1 != 0) {
    let parts = result.toString().split(".");
    // console.log(parts);
    let decimal = parts[1];
    if (decimal > 8) {
      result = result.toFixed(8);
      result = parseFloat(result).toString();
    }
  }
  expression.textContent = result;
}

function backspace() {
  var textContent = expression.textContent;
  //   console.log(textContent); // for some reason it's adding the x, so go back 2
  var modifiedText = textContent.slice(0, -2);
  expression.textContent = modifiedText;
}

document.addEventListener("DOMContentLoaded", function (event) {
  const expression = document.querySelector("#expression");
  //
  expression.textContent = "96%+78%*3";
  //
  var body = document.querySelector("body");
  body.classList.remove("preload");
  var body = document.querySelector("body");

  var buttons = document.querySelectorAll(".button .screen");
  buttons.forEach((button) => {
    let value = button.querySelector("h1").textContent;
    button.setAttribute("val", value);
    button.addEventListener("click", showValue);
  });

  ///// special buttons

  // clear display
  var c = document.querySelector("#c");
  c.removeEventListener("click", showValue);
  c.addEventListener("click", clearDisplay);

  // backspace
  var bs = document.querySelector("#bs");
  bs.removeEventListener("click", showValue);
  bs.addEventListener("click", backspace);

  // evaluate
  var evaluate = document.querySelector("#evaluate");
  evaluate.removeEventListener("click", showValue);
  evaluate.addEventListener("click", evaluateDisplay);
});
