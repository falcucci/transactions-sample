#!/bin/bash
set -e
export PGPASSWORD='localhost';
psql -v ON_ERROR_STOP=1 --username "accounts" --dbname "qonto_accounts_db" <<-EOSQL
  CREATE USER accounts WITH PASSWORD 'localhost';
  CREATE DATABASE qonto_accounts_db;
  GRANT ALL PRIVILEGES ON DATABASE qonto_accounts_db TO accounts;
  \connect qonto_accounts_db accounts
EOSQL
