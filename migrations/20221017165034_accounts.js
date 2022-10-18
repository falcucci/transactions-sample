exports.up = function(knex, Promise) {
 return knex.schema.createTable("accounts", function (table) {
  table.increments('id').primary();
  table.string("organization_name", 255).notNullable();
  table.decimal('balance_cents', 14, 2)
  table.string("iban", 255).unique().notNullable();
  table.string("bic", 255).unique().notNullable();


  table.comment("Table from accounts");
  table.index(["id", "organization_name", "iban", "bic"], "idx_accounts_1");
  table.engine("InnoDB");
 })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('accounts');
};
