const _ = require('lodash');

module.exports = function (sequelize, DataTypes) {
  let account = sequelize.define(
    "account",
    {
      organizationName: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: "organization_name",
      },
      balanceCents: {
        type: DataTypes.INTEGER,
        field: "balance_cents",
      },
      iban: {
        type: DataTypes.STRING(255),
        field: "iban",
        unique: true
      },
      bic: {
        type: DataTypes.STRING(255),
        field: "bic",
        unique: true
      },
    },
    {
      tableName: "accounts",
      timestamps: false,
      classMethods: {
        associate: function() {
          account.hasMany(
            this.models().transfer,
            { as: 'transfers', foreignKey: 'accountId', timestamps: false }
          )
        },
        find: function (iban, bic) {
          return account.findOne({
            where: { '$and' : [{  iban: iban }, { bic: bic}]}
          });
        },
        create: function (obj, transfers=[]) {
          return obj.save().then(row => {
            transfers.forEach(transfer => {
              this.models().transfer.build({
                accountId: row.id,
                counterPartyName: transfer.counterparty_name,
                counterPartyIban: transfer.counterparty_iban,
                counterPartyBic: transfer.counterparty_bic,
                description: transfer.description,
                amountCents: transfer.amount,
              }).save()
            })
            return row
          })
        },
      },
    }
  );

  return account;
};
