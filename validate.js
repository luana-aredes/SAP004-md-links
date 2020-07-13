const axios = require("axios");
const fileInformation = require('./mdLinks');
var file = process.argv.slice(2);
console.log(fileInformation(file[0]))

const status = (fileInformation) => {
  return new Promise((resolved, rejected) => {
    if (fileInformation == false) {
      rejected(fileInformation);
    } else {

      const arrLinks = fileInformation.map(item => {
        const result = item.substring(item.indexOf("  ") + 1);
        const link = result.slice(0, result.indexOf("  "));

        return link;
      });

      const statusResult = arrLinks.forEach(link => {
        console.log(link)
        axios.get(link).then(function (data) {
          const status = {};
          status['href'] = link;
          status['statusText'] = data.statusText;
          status['status'] = data.status;
          console.log(`${link}  ${data.statusText} ${data.status}`);
          return status
        })
      })
    }
    resolved(statusResult);
  })

}
console.log(status(fileInformation(file[0])))
module.exports = status
