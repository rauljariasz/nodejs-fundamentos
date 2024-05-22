function hola(nombre, callback) {
  setTimeout(() => {
    console.log('Hola ' + nombre);
    callback();
  }, 1000);
}

function hablar(callback) {
  setTimeout(() => {
    console.log('bla bla bla');
    callback();
  }, 1000);
}

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(() => {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
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
  conversacion(nombre, 7, () => {
    console.log('Proceso terminado');
  });
});

// hola(nombre, () => {
//   hablar(() => {
//     hablar(() => {
//       hablar(() => {
//         adios(nombre, () => {
//           console.log('Termina proceso.');
//         });
//       });
//     });
//   });
// });
