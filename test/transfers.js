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

const TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.151x-OYZZL9-YJdIH6QTR46u4ZNWBISLNSCuMSbi-yM'

const server = app.listen();

describe("route /transfers", () => {
  describe("Post transaction", () => {
    it("should validate the customer account balance ", async function () {
      const url = basePath + "/transfers";
      const headers = {
        "Accept": 'application/json',
        "Authorization": TOKEN
      };
      const res = await chai
        .request(server)
        .post(url)
        .set(headers)
        .send(bodyMock.request.body.biggerAmount)
      res.should.have.status(HttpStatus.PRECONDITION_FAILED);
    });

    it("should send tranfers with enough funds", async function() {
      const url = basePath + "/transfers";
      const headers = {
        "Accept": 'application/json',
        "Authorization": TOKEN
      };
      const res = await chai
        .request(server)
        .post(url)
        .set(headers)
        .send(bodyMock.request.body.enough)
      res.should.have.status(HttpStatus.CREATED); 
    })

    it("should validate the second transfer sample", async function() {
      const url = basePath + "/transfers";
      const headers = {
        "Accept": 'application/json',
        "Authorization": TOKEN
      };
      const res = await chai
        .request(server)
        .post(url)
        .set(headers)
        .send(bodyMock.request.body.sampleTwo)
      res.should.have.status(HttpStatus.CREATED); 
    })

    it("should validate amount as number", async function() {
      const url = basePath + "/transfers";
      const headers = {
        "Accept": 'application/json',
        "Authorization": TOKEN
      };
      const res = await chai
        .request(server)
        .post(url)
        .set(headers)
        .send(bodyMock.request.body.invalidAmount)
      res.should.have.status(HttpStatus.BAD_REQUEST); 
    })
  });
});
