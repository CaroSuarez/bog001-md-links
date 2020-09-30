const urlStatus = require("./4.urlStatus");

const validateArrayObjects = (arrayOfObjects) => {
  let promises = [];

  for (let i = 0; i < arrayOfObjects.length; i++) {

    let url = arrayOfObjects[i].link;
    promises.push(
      urlStatus(url).then((code) => {
        arrayOfObjects[i].status = code;
        return arrayOfObjects[i];
      })
    );
  }
  

  return promises;
};

module.exports = validateArrayObjects;
