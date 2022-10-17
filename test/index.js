'use strict';

const request = require('supertest');
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require('./../app');
const config = require('config');
const basePath = config.application.basePath;
const HttpStatus = require("http-status-codes");

chai.use(chaiHttp);
chai.should();

const server = app.listen();

describe('route /', () => {
  describe('GET Health Check /', () => {
    it('should respond with OK', async function() {
      const url = basePath + '/';
      const headers = { "Accept": 'application/json' };
      const res = await chai.request(server).get(url).set(headers);
      res.should.have.status(HttpStatus.OK);
    });
  })
})
