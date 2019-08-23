module.exports = Object
    .keys(process.env)
    .filter(k => k.startsWith('REACT_RUNTIME_NOT_SECRET_'))
    .reduce((e, k) => {
      e[k] = process.env[k];
      return e;
    }, {});
