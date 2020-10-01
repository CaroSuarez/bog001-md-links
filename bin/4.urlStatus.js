const request = require("request");

const urlStatus = (url) => {
  return new Promise((resolve) => {
    if (url == undefined) {
      resolve("NA");
    }

    request(url, function (error, response) {
      if (error) {
        resolve("Error in the request");
      } else {
        resolve(response.statusCode);
      }
    });
  });
};

module.exports = urlStatus;
