const path = require("path");
const fs = require("fs");

const genMulti = (moduleTitle, absoluteDirectoryPath) => {
  try {
    fs.mkdirSync(absoluteDirectoryPath);

    fs.writeFileSync(
      path.join(absoluteDirectoryPath, `${moduleTitle}.router.ts`),
      `import { Router } from "express";

const MultiRouter = Router()

// sub module 1
MultiRouter.use("/sub1", Sub1Router)
// sub module 2
MultiRouter.use("/sub2", Sub2Router)

export default MultiRouter`
    );

    console.log(
      `Multi module created to ${absoluteDirectoryPath}. Now create sub single module inside it`
    );
  } catch (error) {
    console.error(`Error creating multi module: ${error.message}`);
  }
};

module.exports = {
  genMulti,
};
