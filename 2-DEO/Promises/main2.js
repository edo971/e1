const obecanje2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let broj = (Math.random() *5).toFixed(0);
    if (broj <= 2) {
      reject('Dobijen je nedozovoljen broj!');
    }
    resolve(broj);
  },5000);
});

obecanje2.then(
  broj => {
    console.log("Vracen je obecani broj i on je:" + broj);
  },
  greska => {
    console.log("Doslo je do greske," + greska);
  }
);
