let cleanRoom1 = function() {
  return new Promise(function(resolve,reject){
    resolve("Cleanedthe Room");
  });
};
 let removeGarbage = function(p) {
  return new Promise(function(resolve,reject){
    resolve("remove Garbage");
  });
};
 let winIcecream = function(p) {
  return new Promise(function(resolve,reject){
    resolve("won Icecream");
  });
};

cleanRoom1().then(function(){
  return removeGarbage
}).then(function(){
  return winIcecream();
}).then(function(){
  console.log("finished");
});
