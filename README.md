<h1 align="center">QONTO TRANSACTIONS API</h1>

<p align="center">A Qonto assignment.</p>

___
[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/collections/77d5aa4661cf6d202d9a)

## Development

Make sure you have installed [Node.js](https://nodejs.org/) <= 12, [Npm](https://www.npmjs.com) and [Git](https://git-scm.com/) on your development machine. Npm should come with Node.js.
	
Just check them by `git --version`, `node -v` and `npm -v`.

clone this repository to your machine.

```bash
git clone git@github.com:falcucci/payments.git
```

## Networking diagram

<img width="1180" alt="Screen Shot 2022-10-18 at 01 08 21" src="https://user-images.githubusercontent.com/33763843/196300022-5cddbc3e-9c3f-487d-b647-7d05ca3da2f2.png">

Running our `docker-compose` file we can have this scenario ready for using as follows load balancer validations:

- Load Balancing three Docker containers with Nginx
- Load Balancing by health check
- Load Balancing by weight check

Make sure you have docker and docker compose installed.

After that, run the docker compose:

```
sudo docker-compose up -d
```

Also please, run our migrations manually just to make sure that everything is okay for consuming the application and send requests.

```bash
docker exec payments_app01_1 sh -c "npm run migrate"
docker exec payments_app02_1 sh -c "npm run migrate"
docker exec payments_app03_1 sh -c "npm run migrate"
```

you can check the health check now at `http://localhost:80/health`.

# Run the app without docker containers:

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

## Auth

This app has a simple `JWT` authentication, which you can generate at https://jwt.io using the secret `qonto-secret-simulation`.

Having done this you can now access the app passing the `Bearer <token>` through the Authorization header parameter.

In case you want to validate requests from the balancer feel free to add rules at our `nginx-def.conf` file as you need adding your own public `IP` address: 
```bash
http{
   ...
   allow 45.43.23.21;
   deny all;
   ...
}

server{
    ...
    allow 45.43.23.21;
    deny all;
    ...
}


location / {
   allow 45.43.23.21;
   deny all;
}
```

# Test Coverage

you can check if everything is fine running the assertions
```bash
npm run test
```
generate coverage
```bash
npm run coverage
```

here you have the test coverage report:
<img width="1206" alt="Screen Shot 2022-10-17 at 21 31 53" src="https://user-images.githubusercontent.com/33763843/196266170-4a688771-f154-468e-b181-eb7f12373d65.png">

