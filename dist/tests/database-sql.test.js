"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

process.env.NODE_ENV = 'test';

var should = _chai.default.should();

var dotenv = require('dotenv');

dotenv.config();
var partyId = '04f08196-af49-4d13-8856-c13c9ab28fe2';
var officeId = '9dba250c-b229-46e4-9dab-583d90ef8117';
var editName = {
  name: 'alvin'
};
var user;
var loginUser = {
  password: '12345',
  email: 'rud@gmail.com'
};
var expect = _chai.default.expect;

_chai.default.use(_chaiHttp.default);

var newParty = {
  name: 'Garnite',
  email: 'tatevf@hfhf.com',
  address: 'no 89 cross road',
  city: 'Cape Town',
  logo: 'https://farm7.staticflickr.com/6057/6262125702_a086dd49f1.jpg'
};
var newOffice = {
  name: 'new office from test'
};
describe('POST /api/v1/login', function () {
  it('should login a user', function (done) {
    _chai.default.request(_index.default).post('/api/v1/auth/login').send(loginUser).end(function (err, res) {
      res.should.have.status(201);
      user = res.body.token; //console.log(user);

      done();
    });
  });
});
describe('POST /api/v1/parties', function () {
  it('should post a party to the database', function (done) {
    _chai.default.request(_index.default).post('/api/v1/parties').send(newParty).end(function (err, res) {
      res.should.have.status(201);
      expect(res.body).to.have.property('rows').and.to.be.an('array');
      done();
    });
  });
});
describe('GET /api/v1/parties', function () {
  it('should return all parties', function (done) {
    _chai.default.request(_index.default).get('/api/v1/parties').end(function (err, res) {
      res.should.have.status(200);
      expect(res.body).to.have.property('data').and.to.be.an('array');
      done();
    });
  });
});
describe('GET /api/v1/party', function () {
  it('should return a single party', function (done) {
    _chai.default.request(_index.default).get("/api/v1/parties/".concat(partyId)).end(function (err, res) {
      res.should.have.status(200);
      expect(res.body).to.have.property('data').and.to.be.an('object');
      done();
    });
  });
});
describe('PUT /api/v1/parties', function () {
  it('should edit a party when given an ID', function (done) {
    _chai.default.request(_index.default).put("/api/v1/parties/".concat(partyId)).send(editName).end(function (err, res) {
      res.should.have.status(200);
      done();
    });
  });
});
describe('DELETE /api/v1/parties', function () {
  it("should delete a party when giiven the party's id", function (done) {
    _chai.default.request(_index.default).delete("/api/v1/parties/".concat(partyId)).end(function (err, res) {
      res.should.have.status(200);
      done();
    });
  });
});
describe('POST /offices', function () {
  it('It should create a new office', function (done) {
    _chai.default.request(_index.default).post('/api/v1/offices').set('authorization', user).send(newOffice).end(function (err, res) {
      expect(res).to.have.status(201);
      done();
    });
  });
});
describe('GET /offices', function () {
  it('It should return all offices', function (done) {
    _chai.default.request(_index.default).get("/api/v1/offices/".concat(officeId)).set('authorization', user).end(function (err, res) {
      expect(res).to.have.status(200);
      expect(res.body).to.have.property('data').and.to.be.an('array');
      done();
    });
  });
});