'use strict';

exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('accounts').del(),
    // Inserts seed entries
    knex('accounts').insert({
      id: 1,
      organization_name: 'ACME Corp',
      balance_cents: 10000000,
      iban: 'FR10474608000002006107XXXXX',
      bic: 'OIVUSCLQXXX'
    }),
    knex('accounts').insert({
      id: 2,
      organization_name: 'San Paolo',
      balance_cents: 1000000,
      iban: 'FR20484608000002006107XXXXX',
      bic: 'PIVUSCLQXXX'
    }),
  );
};
