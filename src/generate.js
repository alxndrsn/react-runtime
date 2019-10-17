module.exports = extraEnvVars => {
  const reactEnv = require('./get-env')(extraEnvVars);
  const json = JSON.stringify(reactEnv, null, 2);

  console.log(`
    window.reactRuntimeEnv = ${json.replace(/^/mg, '  ').trim()};
  `);
};
