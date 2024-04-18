var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.querySelector("body");
var style = document.querySelector("#style");

const changeBackground = () => {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  style.textContent = body.style.background;
};

addEventListener("DOMContentLoaded", changeBackground);

color1.addEventListener("input", changeBackground);

color2.addEventListener("input", changeBackground);

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
const randomizeColor = () => {
  console.log("randomizing");
  let r = Math.ceil(Math.random() * 255);
  let g = Math.ceil(Math.random() * 255);
  let b = Math.ceil(Math.random() * 255);
  let col1 = "rgb(" + r + ", " + g + ", " + b + ")";
  let r1 = Math.ceil(Math.random() * 255);
  let g1 = Math.ceil(Math.random() * 255);
  let b1 = Math.ceil(Math.random() * 255);
  let col2 = "rgb(" + r1 + ", " + g1 + ", " + b1 + ")";
  color1.value = rgbToHex(r, g, b);
  color2.value = rgbToHex(r1, g1, b1);
  body.style.background =
    "linear-gradient(to right, " + col1 + ", " + col2 + ")";
};