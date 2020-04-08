function sum(a,b) {
  return a + b;
  }

//Arrow
let sum2 = (a,b) => a + b

---------------------------------------
function pozitiv(number) {
  return number >= 0
}

//Arrow

 let pozitiv1 = number => number >= 0
---------------------------------------

function RandomNum() {
  return Math.random
}
//Arrow
let RandomNum1 = () => Math.random

----------------------------------------
document.addEventListener('click', function(){
  console.log('Click');
})

//Arrow

document.addEventListener('click', () => console.log('click'))
