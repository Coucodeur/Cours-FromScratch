// const body = document.querySelector("body");
// let red = 0;
// let gre = 0;
// let blu = 0;
// let rgb = 0;
const rgbIs = document.querySelector(".rgbIs");

const colorChange = () => {
  let red = Math.floor(Math.random() * 255);
  let gre = Math.floor(Math.random() * 255);
  let blu = Math.floor(Math.random() * 255);
  let rgb = `rgb(${red}, ${gre}, ${blu})`;
  document.body.style.backgroundColor = rgb;
  rgbIs.textContent = rgb;
};
setInterval(colorChange, 2000);
