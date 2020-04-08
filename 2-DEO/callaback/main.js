 let students = [
   {name:"Edis", score:80, school:"Gimnazija"},
   {name:"Edin", score:80, school:"Ekonomska"},
   {name:"Adin", score:79, school:"Gimnazija"},
   {name:"Adis", score:80, school:"Ekonomska"},
   {name:"Anel", score:47, school:"Gimnazija"},
   {name:"Samir", score:65, school:"Ekonomska"},
   {name:"Asmir", score:40, school:"Gimnazija"},
   {name:"Mirsad", score:45, school:"Ekonomska"},]


 let processStudents = function(data, callback) {
   for(let i = 0; i < data.length; i++ ) {
     if (data[i].school.toLowerCase() === "gimnazija") {
       if (typeof callback === "function") {
         callback(data[i]);
       }
     }
   }
 }

 processStudents(students, function(obj) {
   if(obj.score > 60) {
   console.log(obj.name + " Prosao test");
   }
 });

  let ukupanZbir = function () {
    let total = 0,
    count = 0;

processStudents(students, function(obj) {
  total = total + obj.score;
  count++;
});

  console.log("Ukupno svi bodova " + total + " Ukupno svi studenti " + count);
};
ukupanZbir();
