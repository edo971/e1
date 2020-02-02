function semafor(){
var boje = document.getElementsByClassName('boje');
boje[0].style.background = 'red';
boje[1].style.background = 'gray';
boje[2].style.background = 'gray';

function changeToYellow(){
   boje[1].style.background = 'yellow';
}
function changetoGreen(){
 boje[0].style.background = 'gray';
 boje[1].style.background = 'gray';
 boje[2].style.background = 'green';

}


 var x = setTimeout(changeToYellow,4000);
 var y = setTimeout(changetoGreen,6000);
 var start = setInterval(semafor, 10000);
}
semafor();

function semafor2(){
var boje = document.getElementsByClassName('boje1');
boje[0].style.background = 'green';
boje[1].style.background = 'gray';
boje[2].style.background = 'gray';

function changeToYellow(){
   boje[1].style.background = 'yellow';
}
function changetoGreen(){
 boje[0].style.background = 'gray';
 boje[1].style.background = 'gray';
 boje[2].style.background = 'red';


}

 var x = setTimeout(changeToYellow,4000);
 var y = setTimeout(changetoGreen,6000);
 var start = setInterval(semafor2, 10000);
}
semafor2();