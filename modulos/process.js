process.on('beforeExit', () => {
  console.log('Va a terminar');
});

// Todo lo que se ejecuta en el exit tiene que ser sincrono
process.on('exit', () => {
  console.log('Ha terminado');
});

process.on('uncaughtException', (err, origen) => {
  console.error('Se nos olvido capturar un error:', err);
  console.log(origen);
});
// process.on('unhandledRejection', () => {})

// funcionquenoExiste();

console.log('¿Sale?');
