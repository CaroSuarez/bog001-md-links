const fs = require('fs');
const path = require('path');
const findMdFilesInFolder = require('./findMdFilesInFolder');
const linksObservation = require('./createObjectsArray')
const fsPromises = require('fs').promises;


const readContent = (givenPath) => {
  let itsFolder = fs.lstatSync(givenPath).isDirectory();
  let itsFile = fs.lstatSync(givenPath).isFile();

  if (itsFolder) {
    fsPromises.readdir(givenPath, "utf-8")
      .then((files) => {
        
        
        console.log('empieza la ejecución del readdir')
        let mdFilesNamesArray = findMdFilesInFolder(files);
        let mdFilesAbsolutePaths = mdFilesNamesArray.map((mdFileName) =>path.join(givenPath, mdFileName));
        console.log(mdFilesAbsolutePaths)
        let resultado = linksObservation(mdFilesAbsolutePaths);
        
        
      })
      .catch((error) => {
        console.log(error);
      });
  } else if (itsFile) {
    let fileExt = path.extname(givenPath);

    

    if (fileExt == ".md") {
        
        
        let mdFileAbsolutePath = [givenPath];        
        console.log(mdFileAbsolutePath)
        let resultado = linksObservation(mdFileAbsolutePath);
        

      
    } else {
      throw new Error("This is not a markdown file.");
    }
  }
};

module.exports = readContent;
