'use strict';

const path = require('path');
const fs = require('fs-extra');
const {exec} = require('child_process');
const process = require('process');
const {spawn} = require('child_process');

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
      console.log(`\n pnpm install`);

      const install = spawn(process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm', ['install'], {
        cwd: projecPath,
        env: process.env
      });
      install.stdout.on('data', (data) => {
        console.log(data.toString());
      });
    };

    copyTemplate(projecPath, fn);
  });

};