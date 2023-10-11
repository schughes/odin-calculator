function showValue() {
  let val = this.getAttribute("val");
  let display = document.querySelector("#display");
  display.textContent += val;
}

function clearDisplay() {
  let display = document.querySelector("#display");
  display.textContent = "";
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

  // special buttons
  var c = document.querySelector("#c");
  c.removeEventListener("click", showValue);
  c.addEventListener("click", clearDisplay);
});
