"use strict";

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _chai = _interopRequireDefault(require("chai"));

var _parties = _interopRequireDefault(require("../routes/parties"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// let chaiHttp = require('chai-http');
// let chai = require('chai');
var should = _chai.default.should();

var expect = _chai.default.expect; //import serverParty from '../routes/parties';

_chai.default.use(_chaiHttp.default);

describe('Parties API Integration Tests', function () {
  describe('#GET /parties', function () {
    it('should get all parties', function (done) {
      _chai.default.request(_parties.default).get('/parties').end(function (err, res) {
        res.should.have.status(200);
        res.should.be.a('object');
        done();
      });
    });
    it('should get a single party record', function (done) {
      var id = 1;

      _chai.default.request(_parties.default).get("/parties/".concat(id)).end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
    });
  });
  describe('/DELETE/:id party', function () {
    it('it should DELETE a party given the id', function (done) {
      var id = 1;

      _chai.default.request(_parties.default).delete("/parties/".concat(id)).end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
    });
  });
  describe('/PUT party', function () {
    it('should EDIT a party with name field', function (done) {
      var id = 1;

      _chai.default.request(_parties.default).put("/parties/".concat(id)).send({
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

      _chai.default.request(_parties.default).post("/parties").end(function (err, res) {
        if (!party.name || !party.email || !party.address || !party.city || party.logo) {
          expect(res).to.have.a('object'); //expect(res.body).to.have.property('message');

          done(err);
        }
      });
    });
    it('should POST a party with name field', function (done) {
      var party = {
        status: 201,
        name: 'Garnite',
        email: 'tatevf@hfhf.com',
        address: 'no 89 cross road',
        city: 'Cape Town',
        logo: 'https://farm7.staticflickr.com/6057/6262125702_a086dd49f1.jpg'
      };

      _chai.default.request(_parties.default).post("/parties").end(function (err, res) {
        if (party.name && party.email) {
          expect({}).to.exist;
          expect(err).to.be.null;
          expect(res).to.have.a('object'); //expect(res.body.status).to.be.equal(true);

          expect(res.body).to.have.property('status').equal(201);
          done(err);
        }
      });
    });
  });
});