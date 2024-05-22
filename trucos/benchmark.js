let suma = 0;

console.time('for');

for (let index = 0; index < 1000000000; index++) {
  suma += 1;
}

console.timeEnd('for');

let suma2 = 0;

console.time('for2');

for (let index = 0; index < 10000000; index++) {
  suma2 += 1;
}

console.timeEnd('for2');

console.time('Asincrona');

function asincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Termina el proceso asincrono');
      resolve();
    });
  });
}
asincrona().then(() => {
  console.timeEnd('Asincrona');
});
