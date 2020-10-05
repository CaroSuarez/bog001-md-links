const fs = require("fs");

const createObjectsArray = (mdPathsArray) => {
  let finalResult = [];

  if (mdPathsArray.hasOwnProperty("error")) {
    return finalResult.push(mdPathsArray);
  } else {
    for (path of mdPathsArray) {
      let fileName = path;
      let completeContent = fs.readFileSync(path, "utf-8");
      let regex = /\[.+?\]\(https*.+?\)/g;
      let textsAndLinks = completeContent.match(regex);

      if (textsAndLinks == null) {
        finalResult.push({
          file: fileName,
          error: "no links found in this file",
        });
      } else {
        for (matchedText of textsAndLinks) {
          
          let text = matchedText.match(/\[.+\]/g)[0];
          let linkWithParenthesis = matchedText.match(/\(https*.+?\)/g)[0];
          let link = linkWithParenthesis.replace(/[\(\)]/g, "");

          finalResult.push({
            file: fileName,
            text: text,
            link: link,
          });
        }
      }
    }

    return finalResult;
  }
};

module.exports = createObjectsArray;
