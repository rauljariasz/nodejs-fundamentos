const { createServer } = require('http');

const port = 3008;

const router = (req, res) => {
  if (req.url === '/') {
    console.log('Hola mundo');
    res.end('<h1>Hola mundo</h1>');
  } else if (req.url === '/hola') {
    res.end('<h1>Hola en la ruta /hola</h1>');
  } else {
    res.write('404');
  }
  res.end();
};

const server = createServer(router);

server.listen(port, (err) => {
  if (err) {
    console.info('No se pudo establecer conexion con el servidor');
    console.error(err.message);
  }
  console.info(`Listo en el puerto ${port}`);
});
