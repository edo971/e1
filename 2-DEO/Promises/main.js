 let CleanRoom = new Promise(function(resolve,reject){

   let isClean = true;
   if(isClean){
     resolve("Clean");
   } else {
     reject("Not Clean");
   }
});

CleanRoom.then(function(fromResolve){
  console.log("the room is" + fromResolve);
}).catch(function(fromReject){
  console.log("the roomis" + fromReject);
})
