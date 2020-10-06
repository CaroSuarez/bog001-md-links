const util = require("util");
const toAbsolutePath = require("./1.toAbsolutePath");
const createMdFilesArray = require("./2.createMdFilesArray");
const createObjectsArray = require("./3.createObjectsArray");
const validateArrayObjects = require("./4.validateArrayObjects");

const mdLinks = (givenPath, options) => {
  
  let absolutePath = toAbsolutePath(givenPath);
  let mdFilesArray = createMdFilesArray(absolutePath);
  let finalArray1 = createObjectsArray(mdFilesArray, options);
  
  if (util.isDeepStrictEqual(options, { validate: true })) {
    let promisesArray = validateArrayObjects(finalArray1);
    

    return Promise.all(promisesArray).then((finalArray2) => {
      return new Promise((resolve) => {
        resolve(finalArray2);
      });
    });
  } else {
    return new Promise((resolve) => {       
      resolve(finalArray1);
    });
  }
};

module.exports = mdLinks;