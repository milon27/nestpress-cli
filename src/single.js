const path = require("path");
const fs = require("fs");
const { hyphenToPascalCase } = require("./util");

const genSingular = (moduleTitle, absoluteDirectoryPath) => {
  try {
    fs.mkdirSync(absoluteDirectoryPath);

    fs.writeFileSync(
      path.join(absoluteDirectoryPath, `${moduleTitle}.router.ts`),
      "// todo: hit npr + write module name + tab"
    );
    fs.writeFileSync(
      path.join(absoluteDirectoryPath, `${moduleTitle}.controller.ts`),
      "// todo: hit npc + write module name + tab"
    );

    fs.writeFileSync(
      path.join(absoluteDirectoryPath, `${moduleTitle}.service.ts`),
      `export const ${hyphenToPascalCase(moduleTitle)}Service={}`
    );

    fs.mkdirSync(path.join(absoluteDirectoryPath, "dto"));
    fs.mkdirSync(path.join(absoluteDirectoryPath, "interface"));

    console.log(`module created to ${absoluteDirectoryPath}.`);
  } catch (error) {
    console.error(`Error creating module: ${error.message}`);
  }
};

module.exports = {
  genSingular,
};
