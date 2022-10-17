const config = require('config');
const mount = require('koa-mount');

const transfersRouter = require('./transfers');
const indexController = require('./../controllers/index');

module.exports = function (app) {
  app.use(mount(config.application.basePath, transfersRouter.middleware()));
  app.use(require('koa-router')().get(
    '/health',
    indexController.healthCheck
  ).middleware());
}
