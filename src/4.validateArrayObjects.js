const urlStatus = require("./4.urlStatus");

const validateArrayObjects = (arrayOfObjects) => {
  
  let promises = [];

  for (let i = 0; i < arrayOfObjects.length; i++) {

    
    let url = arrayOfObjects[i].link;

    let promiseOfCode = urlStatus(url).then((code) => {
      arrayOfObjects[i].status = code;
      return arrayOfObjects[i];
    });

    promises.push(promiseOfCode);
  }

  return promises;
};

module.exports = validateArrayObjects;
