"use strict";

const request = require("supertest");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("./../app");
const config = require("config");
const basePath = config.application.basePath;
const HttpStatus = require("http-status-codes");

const bodyMock = require("./__data__/transfers");

chai.use(chaiHttp);
chai.should();

const server = app.listen();

describe("route /transfers", () => {
  describe("Get post", () => {
    it("should validate the customer account balance ", async function () {
      const url = basePath + "/transfers";
      const headers = { "Accept": 'application/json' };
      const res = await chai
        .request(server)
        .post(url)
        .set(headers)
        .send(bodyMock.request.body.biggerAmount)
      res.should.have.status(HttpStatus.PRECONDITION_FAILED);
    });

    it("should send tranfers with enough funds", async function() {
      const url = basePath + "/transfers";
      const headers = { "Accept": 'application/json' };
      const res = await chai
        .request(server)
        .post(url)
        .set(headers)
        .send(bodyMock.request.body.enough)
      res.should.have.status(HttpStatus.CREATED); 
    })

    it("should validate amount as number", async function() {
      const url = basePath + "/transfers";
      const headers = { "Accept": 'application/json' };
      const res = await chai
        .request(server)
        .post(url)
        .set(headers)
        .send(bodyMock.request.body.invalidAmount)
      res.should.have.status(HttpStatus.BAD_REQUEST); 
    })
  });
});
