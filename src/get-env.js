module.exports = extraEnvVars => {
  return Object
      .keys(process.env)
      .filter(k => k.startsWith('REACT_APP_') || extraEnvVars.includes(k))
      .reduce((e, k) => {
        e[k] = process.env[k];
        return e;
      }, {});
}
