'use strict';

exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('transfers').del(),
    // Inserts seed entries
    knex('transfers').insert({
      counterparty_name: 'ACME Corp. Main Account',
      counterparty_iban: 'EE382200221020145685',
      counterparty_bic: 'CCOPFRPPXXX',
      amount_cents: 11000000,
      account_id: 1,
      description: 'Treasury management',
    }),
    knex('transfers').insert({
      counterparty_name: 'Bip Bip',
      counterparty_iban: 'EE383680981021245685',
      counterparty_bic: 'CRLYFRPPTOU',
      amount_cents: 1000000,
      account_id: 1,
      description: 'Bip Bip Salary', 
    }),
  );
};
