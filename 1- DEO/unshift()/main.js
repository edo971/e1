var fruits = ["Banana", "Orandza", "Jabuka", "Kivi"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.unshift("Limun");
  document.getElementById("demo").innerHTML = fruits;
}