#!/usr/bin/node

var flatiron = require('flatiron'),
    haibu = require("haibu-api")
    path = require('path'),
    maga = module.exports = flatiron.app;

maga.config.file({ file: path.join(__dirname, 'config', 'config.json') });

maga.use(flatiron.plugins.cli, {
  source: path.join(__dirname, 'lib', 'commands'),
  usage: 'Manage Haibu processes'
});

maga.use(require('flatiron-cli-config'));

maga.haibu = haibu.createClient({
  host: maga.config.host,
  port: maga.config.port
}).drone;

maga.start();
