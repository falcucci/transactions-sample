FROM node:12

WORKDIR /app

COPY ./package.json .
RUN npm cache clean --force
RUN npm install knex
RUN npm run migrate
RUN npm install
COPY . .

EXPOSE 3000

CMD npm start
