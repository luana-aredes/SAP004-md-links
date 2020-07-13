const axios = require("axios");
const mdLinks = require('./mdLinks');
var file = process.argv.slice(2);
//const link = mdLinks(file[0])




const validate = (links) => {
  return new Promise((resolved, rejected) => {
    if (mdLinks == undefined) {
      rejected(false);
    } else {
      const resultValid = links.map(link => {
        axios.get(link.href).then(function (data) {
          const status = {};
          status['href'] = link.href;
          status['statusText'] = data.statusText;
          status['status'] = data.status;
          const statusResult = `${link.href}  ${data.statusText} ${data.status} ${link.text}`
          console.log(statusResult);
          return statusResult;
        })
      })
      resolved(resultValid);
    }


  })

}

//status(mdLinks(file[0]))
//console.log(status(mdLinks(file[0])))
module.exports = validate
