const fs = require('fs');

const leer = (path, cb) => {
  fs.readFile(path, (err, data) => {
    console.log(data.toString());
  });
};

const escribir = (path, contenido, cb) => {
  fs.writeFile(path, contenido, (err) => {
    if (err) {
      console.error('No se ha podido escribirlo ', err);
    } else {
      console.log('Se ha escrito el archivo.');
    }
  });
};

const borrar = (path, cb) => {
  fs.unlink(path, cb);
};

// leer(__dirname + '/archivo.txt');
// escribir(
//   __dirname + '/archivo2.txt',
//   `Hablame claro chiruli

//     JAJAJJAJAJA`
// );

borrar(__dirname + '/archivo2.txt', console.log);
