#!/usr/bin/env node

const mdLinks = require('./mdLinks');
const validate = require('./validate');
const axios = require("axios");
const {
  program
} = require('commander');

const file = process.argv.slice(2);

program.option('--validate', 'validação dos links').option('--stats', 'Estatistica de links unicos');
program.parse(process.argv);



if (program.validate !== true) {
  mdLinks(file[0]).then(links => {
    links.map(item => {
      const result = `${item.file}  ${item.href}  ${item.text}`
      console.log(result)
    });
  }).catch(console.log('erroooo'));
}


if (program.validate) {
  mdLinks(file[0], {
    validate: true
  }).then(links => {
    console.log(validate(links))
  }).catch(console.log('Erro'))
}


/*


if (program.validate) {
  mdLinks(file[0], {
    validate: true
  }).then(links => {
    console.log(links)
    links.map(link => {
      axios.get(link.href).then(function (data) {
        const status = {};
        status['href'] = link.href;
        status['statusText'] = data.statusText;
        status['status'] = data.status;
       // console.log(`${link.href}  ${data.statusText} ${data.status} ${link.text}`);
      })
    }).catch(console.log('erro'));
  });
}



if (program.stats) {
  console.log('oiii');
}

mdLinks(file[0]).then(links => {
  //console.log(links)
  const resultLink = links.forEach(link => {
    console.log(link.href)

  });
}).catch(console.log('erro'));


                       if (program.validate) {
                         console.log(`${status()}`);
                       }
                       if (program.stats) {
                         console.log(`${stats()}`);
                       }

                                , {
       validate: true
     }
         const arrLinks = fileInformation.map(item => {
           const result = item.substring(item.indexOf("  ") + 1);
           const link = result.slice(0, result.indexOf("  "));
           return link;
         });
                      */
