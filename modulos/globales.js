console.log(globalThis);
let i = 0;
let intervalo = setInterval(() => {
  if (i === 3) return clearInterval(intervalo);
  console.log('Hola');
  i++;
}, 1000);
