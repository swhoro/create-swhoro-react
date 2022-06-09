#!/usr/bin/env node --harmony

'use strict';

process.env.NODE_PATH = __dirname + '/../node_modules';

const program = require('commander');

program.version(require('../package').version).usage('<command>');

program
  .command('create <projectName>')
  .description('creeate a new project')
  .action((projectName) => {
    require('../command/create')(projectName);
  });

program.parse();

if (!program.args.length) {
  program.help();
}