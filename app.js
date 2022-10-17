'use strict';

const app = require('koa')()
const bodyParser = require('koa-bodyparser');
const cors = require('kcors');
const qs = require('koa-qs');

const logger = require('./middleware/log');

qs(app);
app.use(bodyParser());
app.use(cors());
app.use(require('./middleware/helper/request'));

app.on('error', function(err){
  logger.info(err);
});

require('./routes')(app);

module.exports = app;
