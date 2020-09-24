const fs = require('fs');
const path = require('path');
const fsPromises = require('fs').promises; 
const toAbsolutePath =require('./toAbsolutePath.js')
const readContent = require('./readContent.js');

const defaultOptions = {
    validate: false,
    stats: false
  }
 const mdLinks = (givenPath, defaultOptions) => {
    
    let absolutePath = toAbsolutePath(givenPath);
    readContent(absolutePath);

}


 module.exports = mdLinks;