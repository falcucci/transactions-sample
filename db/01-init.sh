#!/bin/bash
set -e
export PGPASSWORD='localhost';
psql -v ON_ERROR_STOP=1 --username "accounts" --dbname "bank_accounts_db" <<-EOSQL
  CREATE USER accounts WITH PASSWORD 'localhost';
  CREATE DATABASE bank_accounts_db;
  GRANT ALL PRIVILEGES ON DATABASE bank_accounts_db TO accounts;
  \connect bank_accounts_db accounts
EOSQL
