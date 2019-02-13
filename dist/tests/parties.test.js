"use strict";

// import chaiHttp from 'chai-http';
// import chai from 'chai';
var chaiHttp = require('chai-http');

var chai = require('chai');

var should = chai.should();
var expect = chai.expect; //import serverParty from '../routes/parties';

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
        expect(res).to.be.a('object');
        done();
      });
    });
  });
  describe('/POST party', function () {
    it('should not POST a party without these fields', function (done) {
      var party = {
        name: 'Garnite',
        email: 'tatevf@hfhf.com',
        address: 'no 89 cross road',
        city: 'Cape Town',
        logo: 'https://farm7.staticflickr.com/6057/6262125702_a086dd49f1.jpg'
      };
      chai.request(serverParty).post("/parties").end(function (err, res) {
        if (!party.name || !party.email || !party.address || !party.city || party.logo) {
          expect(res).to.have.a('object'); //res.should.property('error').that.is.a('string');
          // res.body.should.be.a('object');

          done();
        }
      });
    });
    it('should POST a party with name field', function (done) {
      var party = {
        name: 'Garnite',
        email: 'tatevf@hfhf.com',
        address: 'no 89 cross road',
        city: 'Cape Town',
        logo: 'https://farm7.staticflickr.com/6057/6262125702_a086dd49f1.jpg'
      };
      chai.request(serverParty).post("/parties").end(function (err, res) {
        if (party) {
          expect(err).to.be.null;
          expect(res).to.be.a('object');
          done();
        }
      });
    });
  });
});