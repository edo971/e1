var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var over18 = numbers.filter(myFunction);

document.getElementById("demo").innerHTML = over18;

function myFunction(value) {
  return value > 8;
}

 /* funkcija filter() nam sluzi da filtriramo tj da 
 pronadjemo elemente u nizu koji su veci od 18, u ovom slucaju odgovor treba da bude 9,10. */