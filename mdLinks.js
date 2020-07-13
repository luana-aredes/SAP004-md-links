const fs = require('fs');
var file = process.argv.slice(2);

const mdLinks = (file) => {
  return new Promise((resolved, rejected) => {
    fs.readFile(file, 'utf8', function (err, data) {
      if (err) {
        rejected(err)
      } else {
        const regex = /\[+(.)+\]\(http+(.)+\)/g;
        const regexText = /\[+(.)+\]/g;
        const regexFile = /\(http+(.)+\)/g;
        const links = data.match(regex);

        const fileInformation = links.map(item => {
          const filesObj = {};
          const text = item.match(regexText);
          const href = item.match(regexFile)
          const arrText = text.values();
          const arrFile = href.values();
          const arrTextFinal = arrText.next().value.slice(1, -1);
          const arrFileFinal = arrFile.next().value.slice(1, -1);
          filesObj['href'] = arrFileFinal;
          filesObj['text'] = arrTextFinal;
          filesObj['file'] = file;
          console.log(filesObj)
          return filesObj;
        })
        resolved(fileInformation);
      }

    });
  })
}


mdLinks(file[0])
module.exports = mdLinks;
