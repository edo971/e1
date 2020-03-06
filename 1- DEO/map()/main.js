var numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numbers2 = numbers1.map(myFunction);

document.getElementById("demo").innerHTML = numbers2;

function myFunction(value) {
  return value * 2;
}

/* funkcija map() se koristi kada zelimo da postavimo neki uslov 
za svaki element u nizu, tj. u ovom slucaju sveki element samo mnozili
 sa brojem 2. Odgovor treba da bude 2,4,6,8,10,12,14,16, 18, 20. */
