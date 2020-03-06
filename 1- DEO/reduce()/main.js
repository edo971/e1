var numbers = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10];
var sum = numbers.reduce(myFunction, 100);

document.getElementById("demo").innerHTML = "The sum is " + sum;

function myFunction(total, value) {
  return total + value;
}


/* reduce() funkcija sabira sve elemente
 u nizu i takodje dodaje vrijednost "value" koja sadrzi element 100. rezultat 155 */