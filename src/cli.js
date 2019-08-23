#!/usr/bin/env node
const args = process.argv.slice(2);

switch(args[0]) {
  case 'generate':
    return require('./generate');
  case 'minified':
    return require('./minified');
  case 'html':
    return require('./html');
  case 'help':
  default:
    return require('./usage');
}
