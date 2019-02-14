"use strict";

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _chai = _interopRequireDefault(require("chai"));

var _officies = _interopRequireDefault(require("../routes/officies"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// let chaiHttp = require('chai-http');
// let chai = require('chai');
var should = _chai.default.should();

var expect = _chai.default.expect; // This agent refers to PORT where program is runninng.

//let serverOffices = require('../routes/officies');
_chai.default.use(_chaiHttp.default); // UNIT test begin


describe('Offices API Integration Tests', function () {
  describe('#GET /officies', function () {
    it('should get all officies', function (done) {
      _chai.default.request(_officies.default).get('/officies').end(function (err, res) {
        res.should.have.status(200);
        res.should.be.a('object');
        done();
      });
    });
    it('should get a single office', function (done) {
      var id = 1;

      _chai.default.request(_officies.default).get("/officies/".concat(id)).end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
    });
  });
  describe('#POST /officies', function () {
    it('should post a single office', function (done) {
      _chai.default.request(_officies.default).post('/officies').end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.be.a('object');
        done();
      });
    });
  });
});