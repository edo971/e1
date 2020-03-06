var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var someOver18 = numbers.some(myFunction);

document.getElementById("demo").innerHTML = "Some over 5 is " + someOver18;

function myFunction(value, index, array) {
  return value > 5;
}


/* some() funkcija na pomaze da proverimo da li neki
 elementi zadovoljavaju neki postavljeni kriterijum.. */