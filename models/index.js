'use strict';
const config = require('config').dataSources.account;
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const _ = require('lodash');
const models = {};

const sequelize = new Sequelize(config.name, config.username, config.password, _.assign(config.options, {
  define: {
    classMethods: { 
      models: function () { return models; }
    }
  }
}));

fs.readdirSync(__dirname).filter(function(file) {
  return (file.indexOf('.') !== 0) && (file !== 'index.js');
}).forEach(function(file) {
  var model = sequelize.import(path.join(__dirname, file));
  models[model.name] = model;
});

Object.keys(models).forEach(function(modelName) {
  if ('associate' in models[modelName]) {
    models[modelName].associate();
  }
});

module.exports = _.assign({
  sequelize: sequelize,
  Sequelize: Sequelize
}, models);
