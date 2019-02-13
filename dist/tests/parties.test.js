"use strict";

var chaiHttp = require('chai-http');

var chai = require('chai');

var should = chai.should();
var expect = chai.expect;

var serverParty = require('../routes/parties');

chai.use(chaiHttp);
describe('Parties API Integration Tests', function () {
  describe('#GET /parties', function () {
    it('should get all parties', function (done) {
      chai.request(serverParty).get('/parties').end(function (err, res) {
        res.should.have.status(200);
        res.should.be.a('object');
        done();
      });
    });
    it('should get a single party record', function (done) {
      var id = 1;
      chai.request(serverParty).get("/parties/".concat(id)).end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
    });
  });
  describe('/DELETE/:id party', function () {
    it('it should DELETE a party given the id', function (done) {
      var id = 1;
      chai.request(serverParty).delete("/parties/".concat(id)).end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
    });
  });
  describe('/PUT party', function () {
    it('should EDIT a party with name field', function (done) {
      var id = 1;
      chai.request(serverParty).put("/parties/".concat(id)).send({
        id: 1,
        name: 'Rexford'
      }).end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
    });
  });
  describe('/POST party', function () {
    it('should POST a party with name field', function (done) {
      chai.request(serverParty).post("/parties").send({
        name: 'Rexford',
        address: 'fkmkmfmvk'
      }).end(function (err, res) {
        res.should.have.status(201);
        res.body.should.be.a('object');
        done();
      });
    });
  });
});