// converging to an absolute path:
const path = require("path");

const toAbsolutePath = (givenPath) => {
  let absolutePath;
  if (path.isAbsolute(givenPath)) {
    absolutePath = givenPath;

    return absolutePath;
  } else {
    absolutePath = path.resolve(givenPath);

    return absolutePath;
  }
};

module.exports = toAbsolutePath;
