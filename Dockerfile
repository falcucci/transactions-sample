FROM node:12

WORKDIR /app

COPY ./package.json .
RUN npm cache clean --force
RUN npm install
RUN knex migrate:latest
COPY . .

EXPOSE 3000

CMD npm start
