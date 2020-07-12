#!/usr/bin/env node

const mdLinks = require('./mdLinks');
const validate = require('./validate');
const stats = require('./stats');
const yargs = require('yargs');

var file = process.argv.slice(2);
console.log(file[0])



mdLinks(file[0]).then(links => {
  console.log(links)
}).catch(console.log('erro'));
validate

mdLinks(file[0], {
  vaidate: true
}).then(links => {

}).catch(console.log('erro'));



mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

mdLinks("./some/example.md", {
    validate: true
  })
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);

mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);
