const models = require("../models");

/**
 * Health Check API
 * @yield {[type]} [description]
 */
module.exports.healthCheck = function* () {
  yield models.sequelize.authenticate().catch(function (err) {
    throw err;
  });

  this.body = "OK";
  this.status = 200;
};
