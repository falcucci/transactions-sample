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
        type: DataTypes.DECIMAL(10, 2),
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
        create: async function (iban, bic, funds, transfers=[]) {
          return await sequelize.transaction(async (t) => {
            const acc = await account.findOne({
              where: { '$and' : [{  iban: iban }, { bic: bic}]},
              lock: t.LOCK.UPDATE
            }, { transaction: t })

            if (!acc) {
              return []
            }

            const balance = acc.balanceCents
            if (funds > balance) {
              return [acc, false]
            }

            await sequelize.query(
              "update public.accounts set balance_cents = balance_cents - ? where id = ?;",
              { replacements: [funds, acc.id], transaction: t }
            )

            const bulk = transfers.map(transfer => {
              return {
                accountId: acc.id,
                counterPartyName: transfer.counterparty_name,
                counterPartyIban: transfer.counterparty_iban,
                counterPartyBic: transfer.counterparty_bic,
                description: transfer.description,
                amountCents: transfer.amount,  
              }
            })
            await this.models().transfer.bulkCreate(bulk, { transaction: t })
            return [acc, true]  
          })

        },
      },
    }
  );

  return account;
};
