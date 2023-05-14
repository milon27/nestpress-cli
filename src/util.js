const fs = require("fs");

function hyphenToCamelCase(str) {
  return str.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
}

function hyphenToPascalCase(str) {
  var camelCaseStr = str.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
  return camelCaseStr.charAt(0).toUpperCase() + camelCaseStr.slice(1);
}

function isDirectoryEmpty(directoryPath) {
  try {
    // Read the contents of the directory
    const directoryContents = fs.readdirSync(directoryPath);

    // Return true if the directory is empty
    return directoryContents.length === 0;
  } catch (error) {
    return true;
  }
}

module.exports = { hyphenToCamelCase, hyphenToPascalCase, isDirectoryEmpty };
