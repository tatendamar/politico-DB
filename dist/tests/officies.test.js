"use strict";

// import chaiHttp from 'chai-http';
// import chai from 'chai';
var chaiHttp = require('chai-http');

var chai = require('chai');

var should = chai.should();
var expect = chai.expect; // This agent refers to PORT where program is runninng.
// import serverOffices from '../routes/officies';

var serverOffices = require('../routes/officies');

chai.use(chaiHttp); // UNIT test begin

describe('Offices API Integration Tests', function () {
  describe('#GET /officies', function () {
    it('should get all officies', function (done) {
      chai.request(serverOffices).get('/officies').end(function (err, res) {
        res.should.have.status(200);
        res.should.be.a('object');
        done();
      });
    });
    it('should get a single office', function (done) {
      var id = 1;
      chai.request(serverOffices).get("/officies/".concat(id)).end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
    });
  });
  describe('#GET /officies', function () {
    it('should post a single office', function (done) {
      chai.request(serverOffices).post('/officies').end(function (err, res) {
        expect(res).to.be.a('object');
        done();
      });
    });
  });
});