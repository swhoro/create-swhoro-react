'use strict';

const path = require('path');
const fs = require('fs-extra');
const exec = require('child_process').exec;
const process = require('process');

function handleError(error) {
  if (!error) return false;
  console.log(error);
  process.exit();
}

function copyTemplate(projectPath, callback) {
  const templatePath = path.resolve(__dirname, '../template');

  console.log('\n start copy');

  fs.copy(templatePath, projectPath, function (error) {
    handleError(error);
    console.log('\n copy completed');
    callback();
  });
}

module.exports = (projectName) => {

  const projecPath = path.resolve(process.cwd(), projectName);
  console.log(process.cwd());
  console.log(__dirname);

  fs.emptyDir(projecPath, function (error) {
    handleError(error);

    console.log('\n clear dir');

    const fn = function () {
      console.log(`\n cd ${projectName} && pnpm install`);

      exec(`cd ${projectName} && pnpm install`, (error) => {
        handleError(error);

        console.log('\n pnpm install completed');

        process.exit();
      });
    };

    copyTemplate(projecPath, fn);
  });

};