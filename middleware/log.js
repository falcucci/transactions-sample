'use strict';
const bunyan = require('bunyan');
const config = require('config');
const pjson = require('./../package.json');

const streams = config.logs || [];

streams.push({
  level: 'info',
  stream: process.stdout
});

const configLogger = { 
  name: pjson.name, 
  streams: streams,
  env: process.env.NODE_ENV,
  serializers: {
    req: bunyan.stdSerializers.req,
    res: bunyan.stdSerializers.res,
    err: bunyan.stdSerializers.err
  }
};

const logger = bunyan.createLogger(configLogger);
module.exports = logger;
