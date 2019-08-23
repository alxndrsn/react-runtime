const reactEnv = require('./get-env');
const json = JSON.stringify(reactEnv, null, 2);

console.log(`
  window.process = {
    env: ${json.replace(/^/mg, '    ').trim()},
  };
`);
