exports.up = function(knex, Promise) {
 return knex.schema.createTable("transfers", function (table) {
   table.increments('id').primary();
   table.integer("amount_cents");
   table.string("counterparty_name", 255).notNullable();
   table.string("counterparty_iban", 255).notNullable();
   table.string("counterparty_bic", 255).notNullable();
   table.string("description", 255).notNullable();
   
   table.integer('account_id').unsigned();

   table.foreign('account_id').references('id').inTable('accounts');


   table.comment("Table from transfers");
   table.index([
     "id",
     "counterparty_name",
     "counterparty_iban",
     "counterparty_bic"
   ], "idx_transfers_1");
   table.engine("InnoDB");
 })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('transfers');
};
