const request = require("request");

const urlStatus = (url) => {
  return new Promise((resolve) => {
    
    if (url==undefined){resolve('NA')}

    request(url, function (error, response) {

      

      
      if (error){ 
        resolve('Broken')
      } else {
        
        resolve(response.statusCode);
      }

    });
  });
};

module.exports = urlStatus;
