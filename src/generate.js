const reactEnv = require('./get-env');
const json = JSON.stringify(reactEnv, null, 2);

console.log(`
  window.reactRuntimeEnv = ${json.replace(/^/mg, '  ').trim()};
`);
