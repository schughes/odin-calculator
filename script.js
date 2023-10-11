function showValue() {
  function isValid(val) {
    let expr = expression.textContent;
    if (val === ".") {
      // cant add two dots in a row
      if (expr[expr.length - 1] == ".") {
        return false;
      }
    }
    return true;
  }

  let val = this.getAttribute("val");
  if (isValid(val)) {
    expression.textContent += val;
  }
}

function clearDisplay() {
  document.querySelector("#history").textContent = "";
  expression.textContent = "";
}

function evaluateDisplay() {
  let equation = expression.textContent;
  console.log(equation);
  let result = eval(equation);
  expression.textContent = result;
  document.querySelector("#history").textContent = equation;
}

function backspace() {
  document.querySelector("#history").textContent = "";
  var textContent = expression.textContent;
  //   console.log(textContent); // for some reason it's adding the x, so go back 2
  var modifiedText = textContent.slice(0, -2);
  expression.textContent = modifiedText;
}

document.addEventListener("DOMContentLoaded", function (event) {
  let history = document.querySelector("#history");
  const expression = document.querySelector("#expression");
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
