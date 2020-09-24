const path = require('path');

const findMdFilesInFolder = (filesArray) => {
    const mdFiles = filesArray.filter((file) => path.extname(file) == ".md");
  
    if (mdFiles.length == 0) {
      throw new Error(
        "Seems like you have no markdown files inside the selected folder."
      );
    } else {
      return mdFiles;
    }
  };

  module.exports = findMdFilesInFolder;