function hola(nombre, callback) {
  setTimeout(() => {
    console.log('Hola ' + nombre);
    callback();
  }, 1000);
}

function adios(nombre, callback) {
  setTimeout(() => {
    console.log('Adios ' + nombre);
    callback();
  }, 1000);
}
const nombre = 'Raul';
console.log('Inicia proceso.');
hola(nombre, () => {
  adios(nombre, () => {
    console.log('Termina proceso.');
  });
});
