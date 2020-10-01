const urlStatus = require("./4.urlStatus");

const validateArrayObjects = (arrayOfObjects) => {
  let promises = [];

  for (obj of arrayOfObjects) {

    let url = obj.link;
    promises.push(
      urlStatus(url).then((code) => {
        obj.status = code;
        return obj;
      })
    );
  }
  

  return promises;
};

module.exports = validateArrayObjects;
