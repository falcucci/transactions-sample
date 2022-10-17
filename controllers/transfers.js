'use strict';

const Joi = require('joi');
const _ = require('lodash');
const HttpStatus = require("http-status-codes");

const models = require('../models');
const boom = require('boom');


function * add() {
  let schema = Joi.object().keys({
    body: Joi.object().keys({
      organization_name: Joi.string().max(255).required(),
      organization_bic: Joi.string().max(255).required(),
      organization_iban: Joi.string().max(255).required(),
      credit_transfers: Joi.array().items(Joi.object().keys({
        amount: Joi.number().required(),
        counterparty_name: Joi.string().max(255).required(),
        counterparty_bic: Joi.string().max(255).required(),
        counterparty_iban: Joi.string().max(255).required(),
        description: Joi.string().max(255).required(),
      }))
    })
  });

  const result = Joi.validate(
    { body: this.request.body },
    schema,
    { abortEarly: false }
  );

  if(result.error) {
    throw result.error;
  }

  const iban = result.value.body.organization_iban
  const bic = result.value.body.organization_bic
  const account = yield models.account.find(iban, bic)
  if(!account) {
    throw boom.notFound('account Not Found');
  }
  const balance = account.balanceCents
  const funds = _.sumBy(result.value.body.credit_transfers, 'amount')

  if (funds > balance) {
    throw boom.preconditionFailed(
      'customer has not enough funds for all the transfers'
    );
  }
  account.balanceCents = balance - funds
  const updatedAccount = yield models.account.create(
    account,
    result.value.body.credit_transfers
  );

  this.status = HttpStatus.CREATED;
}

module.exports.add = add;
