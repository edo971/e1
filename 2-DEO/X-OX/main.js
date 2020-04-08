var box = document.querySelector('.box');

createTable();

var boxes = document.querySelectorAll(".xo");
var symbol = 'O';

for (var i=0; i<boxes.length; i++){
boxes[i].addEventListener('click',insertSymbol)
}


function createTable()  {
  var text = '';
  for (var i = 0; i<9; i++){
    text += '<div class="xo"></div>';
  }
  box.innerHTML = text;
}

function insertSymbol() {
  if(symbol == "O"){
   symbol = "X";
 } else {
   symbol = "O";
 }
 this.innerHTML = symbol;
 checkLines();
}
function checkLines() {
if(boxes[0].innerHTML == boxes[1].innerHTML && boxes[0].innerHTML == boxes[2].innerHTML && boxes[0].innerHTML !== ""){
 boxes[0].style.background = "black";
 boxes[1].style.background = "black";
 boxes[2].style.background = "black";

} else if  (boxes[3].innerHTML == boxes[4].innerHTML && boxes[3].innerHTML == boxes[5].innerHTML && boxes[3].innerHTML !== ""){
 boxes[3].style.background = "black";
 boxes[4].style.background = "black";
 boxes[5].style.background = "black";

} else if  (boxes[6].innerHTML == boxes[7].innerHTML && boxes[6].innerHTML == boxes[8].innerHTML && boxes[7].innerHTML !== ""){
 boxes[6].style.background = "black";
 boxes[7].style.background = "black";
 boxes[8].style.background = "black";

} else if  (boxes[0].innerHTML == boxes[3].innerHTML && boxes[0].innerHTML == boxes[6].innerHTML && boxes[6].innerHTML !== ""){
 boxes[0].style.background = "black";
 boxes[3].style.background = "black";
 boxes[6].style.background = "black";

} else if  (boxes[1].innerHTML == boxes[4].innerHTML && boxes[1].innerHTML == boxes[7].innerHTML && boxes[7].innerHTML !== ""){
 boxes[1].style.background = "black";
 boxes[4].style.background = "black";
 boxes[7].style.background = "black";

} else if  (boxes[2].innerHTML == boxes[5].innerHTML && boxes[2].innerHTML == boxes[8].innerHTML && boxes[8].innerHTML !== ""){
 boxes[2].style.background = "black";
 boxes[5].style.background = "black";
 boxes[8].style.background = "black";

} else if  (boxes[0].innerHTML == boxes[4].innerHTML && boxes[0].innerHTML == boxes[8].innerHTML && boxes[8].innerHTML !== ""){
 boxes[0].style.background = "black";
 boxes[4].style.background = "black";
 boxes[8].style.background = "black";

} else if  (boxes[2].innerHTML == boxes[4].innerHTML && boxes[2].innerHTML == boxes[6].innerHTML && boxes[6].innerHTML !== ""){
 boxes[2].style.background = "black";
 boxes[4].style.background = "black";
 boxes[6].style.background = "black";
}
}
