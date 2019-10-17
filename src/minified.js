module.exports = extraEnvVars => {
  const reactEnv = require('./get-env')(extraEnvVars);
  const json = JSON.stringify(reactEnv);

  console.log(`window.reactRuntimeEnv=${json};`);
};
