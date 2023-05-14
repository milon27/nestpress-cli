#!/usr/bin/env node
const { program } = require("commander");
const { execSync } = require("child_process");
const path = require("path");
const { genSingular } = require("./single");
const { genMulti } = require("./multi");
const { isDirectoryEmpty } = require("./util");
const package = require("../package.json");

program.version(package.version);

// ? init project

const initProjectRepo = "https://github.com/milon27/nestpress";

program
  .command("init [directory-path]")
  .description("initializing project with nestpress")
  .action(async (_directory, options) => {
    const directory = _directory || ".";
    console.log(`creating new project on ${directory}`);
    // Resolve the absolute path
    const absoluteDirectoryPath = path.resolve(directory);
    // Check if the path is empty or not
    if (!isDirectoryEmpty(absoluteDirectoryPath)) {
      console.log("path is not empty.");
      return;
    }
    // Check if the path already exists
    // if (fs.existsSync(absoluteDirectoryPath)) {
    //   fs.rmdirSync(absoluteDirectoryPath);
    // }
    // Download the Git repository
    try {
      execSync(`git clone ${initProjectRepo} ${absoluteDirectoryPath}`);
      console.log(`project created to ${absoluteDirectoryPath}.`);
      console.log(`========== Now open the project on vscode ==========`);
      console.log(`cd ${directory}`);
      console.log(`code .`);
    } catch (error) {
      console.error(`Error creating project: ${error.message}`);
    }
  });

// ? create module

const ModuleType = {
  single: "single",
  multi: "multi",
};

program
  .command("module <module-name> [path]")
  .alias("m")
  .description("Create a new module")
  .option("-s, --single", "create singular module")
  .option("-m, --multi", "create multi module")
  .action((moduleName, _modulePath, options) => {
    const moduleType = options.multi ? ModuleType.multi : ModuleType.single;
    const modulePath = _modulePath || "";
    const moduleTitle = moduleName
      .toLowerCase()
      .replaceAll(" ", "-")
      .replaceAll("_", "-");

    const absoluteDirectoryPath = path.resolve(
      "src",
      "feature",
      modulePath,
      moduleTitle
    );

    // Check if the path already exists
    if (!isDirectoryEmpty(absoluteDirectoryPath)) {
      console.log("path is not empty.");
      return;
    }

    console.log(
      `Creating a ${moduleType} module feature called: ${moduleTitle}`
    );

    // create a module
    if (moduleType === ModuleType.multi) {
      genMulti(moduleTitle, absoluteDirectoryPath);
    } else {
      genSingular(moduleTitle, absoluteDirectoryPath);
    }
  });

program.parse(process.argv);
