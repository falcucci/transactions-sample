'use strict';

exports.seed = function(knex, Promise) {
  return Promise.all([
    // Deletes ALL existing entries
    knex('accounts').del(),
    knex('transfers').del(),
  ]);
};
