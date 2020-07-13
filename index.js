const fs = require('fs');
const fetch = require('node-fetch');

const mdLinks = (path, option) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', function (err, data) {
      if (err) {
        reject(err)
      } else {
        const regex = /\[+(.)+\]\(http+(.)+\)/g;
        const regexText = /\[+(.)+\]/g;
        const regexFile = /\(http+(.)+\)/g;
        const links = data.match(regex);


        const link = links.map(item => {
          const filesObj = {};
          const text = item.match(regexText);
          const href = item.match(regexFile)
          const arrText = text.values();
          const arrFile = href.values();
          const arrTextFinal = arrText.next().value.slice(1, -1);
          const arrFileFinal = arrFile.next().value.slice(1, -1);
          filesObj['href'] = arrFileFinal;
          filesObj['text'] = arrTextFinal;
          filesObj['path'] = path;
          return filesObj;
        })

        if (option) {
          const insidePromise = link.map(item => {
            return fetch(item.href)
              .then(response => {
                item.statusText = response.statusText;
                item.status = response.status
              })
              .catch(console.log(err));
          });


          Promise.all(insidePromise)
            .then(() => {
              resolve(link);
            })
            .catch(console.log(err));


        } else {
          resolve(link);
        }
      }
    });

  })

}

module.exports = mdLinks;
