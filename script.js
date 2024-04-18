var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.querySelector("body");
var style = document.querySelector("#style");

const changeBackground = () => {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  style.textContent = "background: " + body.style.background + ";";
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
  let style = document.querySelector("#style");
  style.textContent = "background: " + body.style.background + ";";
};

function copyCss() {
  // Get the text field
  var copyText = document.getElementById("style");
  // Select the h3 element
  const h3Element = document.querySelector("h3");

  // Retrieve the text content of the h3 element
  const textToCopy = h3Element.textContent;

  // Use the Clipboard API if available
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log("Text copied successfully");
      })
      .catch((error) => {
        console.error("Unable to copy text: ", error);
      });
  } else {
    // Fallback method for browsers that don't support Clipboard API
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    console.log("Text copied successfully");
  }
}
