const os = require('os');

// console.log(os.arch());
// console.log(os.platform());
// console.log(os.cpus());
// console.log(os.constants);
// console.log(os.freemem());

const SIZE = 1024;
const kb = (bytes) => {
  return bytes / SIZE;
};
const mb = (bytes) => {
  return kb(bytes) / SIZE;
};
const gb = (bytes) => {
  return mb(bytes) / SIZE;
};

console.log(gb(os.freemem()));

console.log(os.tmpdir());
console.log(os.homedir());
console.log(os.hostname());
