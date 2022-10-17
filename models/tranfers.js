const _ = require('lodash');

module.exports = function (sequelize, DataTypes) {
  const transfer = sequelize.define(
    "transfer",
    {
      counterPartyName: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: "counterparty_name",
      },
      counterPartyIban: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: "counterparty_iban",
      },
      counterPartyBic: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: "counterparty_bic",
      },
      amountCents: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "amount_cents",
      },
      description: {
        type: DataTypes.STRING(255),
        field: "description",
      },
      accountId: { type: DataTypes.INTEGER, field: 'account_id' },
    },
    {
      tableName: "transfers",
      timestamps: false,
      classMethods: {
        associate: function() {
          transfer.belongsTo(
            this.models().account,
            { as: 'accounts', foreignKey: 'accountId', timestamps: false }
          )
        },
      }
    },
  );

  return transfer;
};
