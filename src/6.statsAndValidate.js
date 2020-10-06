const stats = require("./5.stats");
const util = require("util");

const statsAndValidate = (arrayOfObjectWithLinks) => {
  let uniqueBrokenLinks = [];
  let resultObject = stats(arrayOfObjectWithLinks);

  const resultObjectWhenNoLinks = {
    file: arrayOfObjectWithLinks[0].file,
    error: 'no links found'
  }

  

  for (obj of arrayOfObjectWithLinks) {
    if ((obj.link != undefined) & (obj.status > 399)) {
      let linkAndStatus = obj.link + "; " + obj.status;
      if (!uniqueBrokenLinks.includes(linkAndStatus)) {
        uniqueBrokenLinks.push(linkAndStatus);      
      }
    }
  }

  if(util.isDeepStrictEqual(resultObject, resultObjectWhenNoLinks)){
    resultObject.broken = 'NA';
    return resultObject;
  }else {
    let brokenLinksCount = uniqueBrokenLinks.length;
    resultObject.broken = brokenLinksCount;
    return resultObject;

  }

  
};

module.exports = statsAndValidate;
