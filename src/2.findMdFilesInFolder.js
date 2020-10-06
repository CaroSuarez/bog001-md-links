const path = require("path");

const findMdFilesInFolder = (filesArray) => {
  const mdFiles = filesArray.filter((file) => path.extname(file) == ".md");

  if (mdFiles.length == 0) {
    return 'error: no md files found';
  } else {
    return mdFiles;
  }
};

module.exports = findMdFilesInFolder;
