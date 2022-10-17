"use strict";
module.exports = {
  development: {
    client: "pg",
    connection: {
      host:
        process.env["DATASOURCES_ACCOUNT_ADDR"] ||
        "localhost",
      port: process.env["DATASOURCES_ACCOUNT_PORT"] || 5432,
      database: process.env["DATASOURCES_ACCOUNT_HOST"] || "qonto_accounts_db",
      user: process.env["DATASOURCES_ACCOUNT_USER"] || "accounts",
      password: process.env["DATASOURCES_ACCOUNT_PASSWORD"] || "localhost",
    },
    pool: {
      min: process.env["DATASOURCES_ACCOUNT_OPTIONS_POOL_MAX"] || 1,
      max: process.env["DATASOURCES_ACCOUNT_OPTIONS_POOL_MIN"] || 5,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
  test: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./test.sqlite3",
    },
  }
};
