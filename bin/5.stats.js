const stats = (arrayOfObjectWithLinks) => {
  let linksCount = 0;
  let linksArray = [];

  for (obj of arrayOfObjectWithLinks) {
    if (obj.link != undefined) {
      linksCount += 1;
      linksArray.push(obj.link);
    }
    
  }

  let uniqueLinks = [];
  linksArray.forEach((link) => {
    if (!uniqueLinks.includes(link)) {
      uniqueLinks.push(link);
    }
  });

  let uniqueCount = uniqueLinks.length;

  return {
    total: linksCount,
    unique: uniqueCount,
  };
};

module.exports = stats;
