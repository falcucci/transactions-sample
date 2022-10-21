"use strict";
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  application: {
    host: "0.0.0.0",
    port: process.env["PORT"] || 3000,
    basePath: process.env["BASE_PATH"] || "/accounts",
    secret: 'bank-secret-simulation'
  },
  dataSources: {
    account: {
      name: process.env["DATASOURCES_ACCOUNT_HOST"] || "bank_accounts_db",
      username: process.env["DATASOURCES_ACCOUNT_USER"] || "accounts",
      password:
        process.env["DATASOURCES_ACCOUNT_PASSWORD"] || "localhost",
      options: {
        dialect: "postgres",
        host: process.env["DATASOURCES_ACCOUNT_ADDR"] || "localhost",
        port: process.env["DATASOURCES_ACCOUNT_PORT"] || 5432,
        debug: false,
        logging: '',
        define: {
          version: true
        },
        pool: {
          max:
            process.env["DATASOURCES_ACCOUNT_OPTIONS_POOL_MAX"] || 10,
          min:
            process.env["DATASOURCES_ACCOUNT_OPTIONS_POOL_MIN"] || 1,
          idle:
            process.env["DATASOURCES_ACCOUNT_OPTIONS_POOL_IDLE"] ||
            10000,
        },
      },
    },
  },
};
