const urlStatus = require("./4.urlStatus");

const validateArrayObjects = (arrayOfObjects) => {
  // console.log('-----------------------------------------------------------------')
  // console.log('aquí empieza el validateArrayIbjects')
  // console.log('con el siguiente array de objetos')
  // console.log(arrayOfObjects)

  // console.log('-----------------------------------------------------------------')

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
