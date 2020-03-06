var fruits = ["Banana", "Orandza", "Jabuka", "Kivi"];
document.getElementById("demo").innerHTML = fruits;
function myFunction() {
  fruits.splice(0, 1);
  document.getElementById("demo").innerHTML = fruits;
}