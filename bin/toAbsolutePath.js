// converging to an absolute path:
const path = require('path');


const toAbsolutePath = (givenPath) => {
    
    let absolutePath;
    if(path.isAbsolute(givenPath)){
        return absolutePath = givenPath;

    } else {        
        return absolutePath = path.resolve(givenPath);

    }
}

module.exports = toAbsolutePath;
