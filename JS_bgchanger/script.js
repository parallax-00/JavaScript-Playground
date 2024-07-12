//! Selecting each color manually, can be done using loop too
// document.getElementById("grey").addEventListener("click", function (x) {
//     document.body.style.backgroundColor = x.target.id;
// });
// document.getElementById("red").addEventListener("click", function (x) {
//     document.body.style.backgroundColor = x.target.id;
// });
// document.getElementById("blue").addEventListener("click", function (x) {
//     document.body.style.backgroundColor = x.target.id;
// });
// document.getElementById("yellow").addEventListener("click", function (x) {
//     document.body.style.backgroundColor = x.target.id;
// });

//! Scripting using Loop
const body = document.body
const button = document.querySelectorAll('.button')

button.forEach(function (x) {
    x.addEventListener('click', function (x) {
//   console.log(x.target.id);
        if (x.target.id==='grey') {
            body.style.backgroundColor = x.target.id;
        } else if (x.target.id==='red') {
            body.style.backgroundColor = x.target.id;
        } else if (x.target.id==='blue') {
            body.style.backgroundColor = x.target.id;
        } else if (x.target.id==='yellow') {
            body.style.backgroundColor = x.target.id;
        }
    })
})

//! Reset to white background functionality
document.querySelector('#reset').addEventListener('click', function (x) {
    body.style.backgroundColor='white'
})
