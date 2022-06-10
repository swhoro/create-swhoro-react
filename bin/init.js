#!/usr/bin/env node --harmony

'use strict';

process.env.NODE_PATH = __dirname + '/../node_modules';

const projectName = process.argv[2];
const create = require('../command/create');
create(projectName);
