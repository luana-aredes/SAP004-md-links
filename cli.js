#!/usr/bin/env node

const mdLinks = require('./index');
const path = process.argv[2];
const option = process.argv[3] || process.argv[4]
console.log(path)

mdLinks(path, option)
  .then(links => {
    if (option === '--validate') {
      //program.validate
      links.forEach(item => {
        console.log(`${item.href}  ${item.statusText} ${item.status} ${item.text}`);
      })
    } else {
      links.forEach(item => {
        console.log(`${item.path}  ${item.href}  ${item.text}`)
      })
    }
  })
  .catch(console.log('erro'));
