const fs = require("fs");

const createObjectsArray = (mdPathsArray) => {
  let finalResult = [];
  

  if (mdPathsArray.hasOwnProperty('error')){

    finalResult.push(mdPathsArray);
  } else {
    for (let i = 0; i < mdPathsArray.length; i++) {
    
      let fileName = mdPathsArray[i];
      let completeContent = fs.readFileSync(mdPathsArray[i], "utf-8");
      let regex = /\[.+?\]\(https*.+?\)/g;
      let textsAndLinks = completeContent.match(regex);
  
      if (textsAndLinks == null) {
          finalResult.push({
          file: fileName,
          error: "no links found in this file",
        });
      } else {
        for (let j = 0; j < textsAndLinks.length; j++) {
          let text = textsAndLinks[j].match(/\[.+\]/g)[0];
          let linkWithParenthesis = textsAndLinks[j].match(/\(https*.+?\)/g)[0];
          let link = linkWithParenthesis.replace(/[\(\)]/g, "");
  
          finalResult.push({
            file: fileName,
            text: text,
            link: link,
          });
        }
      }
    }



  }


  //console.log(finalResult)
  return finalResult;
};

module.exports = createObjectsArray;
