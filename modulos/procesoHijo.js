const { exec, spawn } = require('child_process');

// exec('ls -la', (err, stdout, sterr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }

//   console.log(stdout);
// });

let process = spawn('ls', ['-la']);

console.log(process.pid);

// El "on" es algo similar a un "onEvent" en el front
process.stdout.on('data', (dato) => {
  console.log(dato.toString());
  console.log(process.kill());
});

process.on('exit', () => {
  console.log('El proceso termino');
  console.log(process.killed);
});
