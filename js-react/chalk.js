const fs = require("fs");
// const path = require("path");
const chalk = require("chalk");

const appDirectory = fs.realpathSync(process.cwd());
console.log(chalk.dim("Hello world!"));
console.log(chalk.dim(appDirectory));
console.log(__dirname);
console.log(process.cwd());
