const fs = require("fs");
const path = require("path");
const findMdFilesInFolder = require("./2.findMdFilesInFolder");

const createMdFilesArray = (givenPath) => {
  let exist = fs.existsSync(givenPath);
  if (exist) {
    let itsFolder = fs.lstatSync(givenPath).isDirectory();
    let itsFile = fs.lstatSync(givenPath).isFile();

    if (itsFolder) {
      let filesArray = fs.readdirSync(givenPath, "utf-8");
      let mdFilesNamesArray = findMdFilesInFolder(filesArray);
      if (mdFilesNamesArray == "error: no md files found") {
        noMdFiles = {
          folder: givenPath,
          error: 'No markdown files inside this folder'.red
        };

        return noMdFiles;
      } else {
        let mdFilesAbsolutePaths = mdFilesNamesArray.map((mdFileName) =>
          path.join(givenPath, mdFileName)
        );

        return mdFilesAbsolutePaths;
      }
    } else if (itsFile) {
      let fileExt = path.extname(givenPath);

      if (fileExt == ".md") {
        let mdFileAbsolutePath = [givenPath];
        return mdFileAbsolutePath;
      } else {
        let notMdFile = {
          file: givenPath,
          error: "Not a markdown file",
        };
        return notMdFile;
      }
    }
  } else {
    let doesntExist = {
      path : givenPath,
      error : "no such directory",
      tip : "remember to write a absolute path or a path relative to the current working directory",
    };

    return doesntExist;
  }
};

module.exports = createMdFilesArray;
