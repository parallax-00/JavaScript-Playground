//! Generating a random color
let validVariable;
let color;
const randomColor = () => {
  const hex = "0123456789ABCDEF";
  color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
const startChangingColor = () => {
    validVariable = setInterval(changeColor, 500);
    function changeColor(){
        document.querySelector('body').style.backgroundColor = randomColor();
   }
}
const stopChangingColor = () => {
    clearInterval(validVariable)
}
document.querySelector('#start').addEventListener('click',startChangingColor,false)
document.querySelector('#stop').addEventListener('click',stopChangingColor,false)