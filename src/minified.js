const reactEnv = require('./get-env');
const json = JSON.stringify(reactEnv);

console.log(`window.process={env:${json}};`);
