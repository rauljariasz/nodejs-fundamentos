function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Hola ' + nombre);
      resolve(nombre);
    }, 1000);
  });
}

function hablar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('bla bla bla');
      reject('Ha ocurrido un error');
      //   resolve();
    }, 1000);
  });
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

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Adios ' + nombre);
      resolve();
    }, 1000);
  });
}

const nombre = 'Raul';
console.log('Inicia proceso.');
hola(nombre)
  .then(hablar)
  .then((res) => {
    return adios(res);
  })
  .then((res) => {
    console.log('Terminado el proceso');
  })
  .catch((error) => {
    console.error('Erorr');
    console.error(error);
  });
