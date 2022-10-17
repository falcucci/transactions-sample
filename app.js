'use strict';

const app = require('koa')()
const config = require("config");
const bodyParser = require('koa-bodyparser');
const jwt = require('koa-jwt');
const cors = require('kcors');
const qs = require('koa-qs');

const logger = require('./middleware/log');

qs(app);
app.use(bodyParser());
app.use(cors());
app.use(require('./middleware/helper/request'));
app.use(jwt({ secret: config.application.secret }).unless({ path: [/^\/health/] }));

app.on('error', function(err){
  logger.info(err);
});

require('./routes')(app);

module.exports = app;
