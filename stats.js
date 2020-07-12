const fileInformation = require('./mdLinks');

console.log(fileInformation)
const stats = () => {
  const arrLinks = fileInformation.map(item => {
    //  const result = item.substring(item.indexOf("  ") + 1);
    console.log(item)
    //const link = result.slice(0, result.indexOf("  "));
    // return link;
  })
  const occurrences = arrLinks.reduce(function (obj, item) {
    obj[item] = (obj[item] || 0) + 1;
    return obj;
  }, {});
  const linksUnique = Object.values(occurrences);
  //console.log(linksUnique)
  //quero somar somente os numeros '1'

  const statsData = {};
  statsData['total'] = fileInformation.length;
  statsData['unique'] = linksUnique;
  console.log(statsData)
}


module.exports = stats;
