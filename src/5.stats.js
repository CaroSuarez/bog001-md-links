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

  if(linksArray.length>0){

    let statsResult = {
      total: linksCount,
      unique: uniqueCount,
    };

    return statsResult;
  

  } else {

    let errorStatsResult = {
      total: 'NA',
      unique : 'NA',
      error: arrayOfObjectWithLinks[0].error
    }

    return obj;


  }

  
  
};

module.exports = stats;
