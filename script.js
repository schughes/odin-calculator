function showValue() {
  let val = this.getAttribute("val");
  let display = document.querySelector("#display");
  display.textContent += val;
}

function clearDisplay() {
  let display = document.querySelector("#display");
  display.textContent = "";
}

function evaluateDisplay() {
  let display = document.querySelector("#display");
  let equation = display.textContent;
  console.log(equation);
  let result = eval(equation);
  display.textContent = result;
}

document.addEventListener("DOMContentLoaded", function (event) {
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

  // evaluate
  var evaluate = document.querySelector("#evaluate");
  evaluate.removeEventListener("click", showValue);
  evaluate.addEventListener("click", evaluateDisplay);
});
