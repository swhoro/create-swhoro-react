'use strict';

const path = require('path');
const fs = require('fs-extra');
const {spawn} = require('child_process');

function handleError(error) {
  if (!error) return false;
  console.log(error);
  process.exit();
}

function copyTemplate(projectPath, callback) {
  const templatePath = path.resolve(__dirname, '../template');

  console.log('\nstart copy');

  fs.copy(templatePath, projectPath, function (error) {
    handleError(error);
    console.log('\ncopy completed');
    callback();
  });
}

module.exports = (projectName) => {

  const projecPath = path.resolve(process.cwd(), projectName);

  fs.emptyDir(projecPath, function (error) {
    handleError(error);

    console.log('\nclear dir');

    const fn = function () {
      console.log(`\npnpm install\n`);

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