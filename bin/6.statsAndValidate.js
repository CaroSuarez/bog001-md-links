const stats = require("./5.stats");

const statsAndValidate = (arrayOfObjectWithLinks) => {
  let uniqueBrokenLinks = [];
  let resultObject = stats(arrayOfObjectWithLinks);

  for (obj of arrayOfObjectWithLinks) {
    if ((obj.link != undefined) & (obj.status > 399)) {
      let linkAndStatus = obj.link + "; " + obj.status;
      if (!uniqueBrokenLinks.includes(linkAndStatus)) {
        uniqueBrokenLinks.push(linkAndStatus);
      }
    }
  }

  let brokenLinksCount = uniqueBrokenLinks.length;
  resultObject.broken = brokenLinksCount;

  return resultObject;
};

module.exports = statsAndValidate;
