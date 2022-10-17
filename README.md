<h1 align="center">QONTO TRANSACTIONS API</h1>

<p align="center">A Qonto assignment.</p>

___
[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/collections/77d5aa4661cf6d202d9a)

## Development

Make sure you have installed [Node.js](https://nodejs.org/) <= 12, [Npm](https://www.npmjs.com) and [Git](https://git-scm.com/) on your development machine. Npm should come with Node.js.
	
Just check them by `git --version`, `node -v` and `npm -v`.

clone this repository to your computer.

```bash
git clone git@github.com:falcucci/payments.git
```

install all dependencies:

```bash
npm i
```

install postgresql

```bash
brew install postgresql
```

initialize postgres

```bash
psql postgres
```
grants all privileges for the user

```bash
postgres=# ALTER ROLE accounts CREATEDB;
```

create a new user and the password as follows
```bash
postgres=# CREATE ROLE accounts WITH LOGIN PASSWORD localhost;
```
now you need to create a db and name it as `qonto_accounts_db`
```bash
postgres=# CREATE DATABASE qonto_accounts_db;
```

or just run:

```bash
sh ./db/01-init.sh
```

 After that you need to install knex to run and setup our migrations as follows:
```bash
npm install knex -g
```
now run all migrations
```bash
knex migrate:latest 
```
run the seeds

```bash
knex seed:run
```

you can check if everything is fine running the assertions
```bash
npm run test
```
generate coverage
```bash
npm run coverage
```

<img width="1206" alt="Screen Shot 2022-10-17 at 21 31 53" src="https://user-images.githubusercontent.com/33763843/196266170-4a688771-f154-468e-b181-eb7f12373d65.png">


### Run server with Docker

make sure to run the migrations

```bash
docker exec <container> sh -c "npm run migrate"
```

you can start the instances using docker compose

```bash
docker-compose up
```

to avoid any trouble in case of using docker I highly recommend you to stop your local postgres process
```bash
brew services stop postgresql
```

### Improvements to do

- add better assertions to check the responses payload using mocks;
- better docs using jsdocs on methods and/or swagger/blueprint;
