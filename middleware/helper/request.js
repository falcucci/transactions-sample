'use strict';
const Boom = require('boom');
const _ = require('lodash');
const pkg = require('./../../package.json');

module.exports = function *(next){
  try {
    // set header response
    this.set('x-api-version', pkg.version);

    yield next;
    
    if(this.status == 404) {
      this.throw(404);  
    }
  } catch (err) {
    this.status = err.isJoi ? 400 : err.isBoom ? err.output.statusCode : (err.status || 500);
    this.body = Boom.wrap(err, this.status, err.message).output.payload;
    if(err.isJoi) {
      this.body.data = _.map(Array.isArray(err.details) ? err.details : [err.details], function(obj) {
        return _.pick(obj, 'message', 'path');
      });
    }

    /* istanbul ignore if  */
    if(this.status == 500) {
      this.app.emit('error', err);
    }
  }
};
