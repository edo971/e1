var fruits = ["Banana", "Jabuka", "Orandza",];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.push("Kivi");
  document.getElementById("demo").innerHTML = fruits;
}