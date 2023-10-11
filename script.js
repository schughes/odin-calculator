function showValue() {
  let val = this.getAttribute("val");
  let display = document.querySelector("#display");
  display.textContent += val;
}
document.addEventListener("DOMContentLoaded", function (event) {
  var body = document.querySelector("body");
  body.classList.remove("preload");
  var body = document.querySelector("body");

  var buttons = document.querySelectorAll(".button .screen");
  //   console.log(numbers);
  buttons.forEach((button) => {
    let value = button.querySelector("h1").textContent;
    button.setAttribute("val", value);
    button.addEventListener("click", showValue);
  });
});
