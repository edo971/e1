const jedan = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve("Mapa je uspesno ucitana!");
  }, 2000);
  });

const dva = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve("Podaci o igracu su ucitani!");
  }, 1000);
  });

const tri = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve("Teksture za igru su ucitane!");
  }, 1000);
  });

 jedan.then(rezultat => console.log(rezultat));
 dva.then(rezultat => console.log(rezultat));
 tri.then(rezultat => console.log(rezultat));

Promise.all([jedan, dva, tri])
.then(rezultati => {
  console.log("Igra pocinje");
});
