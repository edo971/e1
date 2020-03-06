var ages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function checkAdult(age) {
  return age >= 5;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.some(checkAdult);
}