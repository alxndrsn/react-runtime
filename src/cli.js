#!/usr/bin/env node
const [ command, ...extraEnvVars ] = process.argv.slice(2);

switch(command) {
  case 'generate':
    return require('./generate')(extraEnvVars);
  case 'minified':
    return require('./minified')(extraEnvVars);
  case 'html':
    return require('./html');
  case 'help':
  default:
    return require('./usage');
}
