// import chaiHttp from 'chai-http';
// import chai from 'chai';

let chaiHttp = require('chai-http');
let chai = require('chai');

let should = chai.should();
let expect = chai.expect;

// This agent refers to PORT where program is runninng.

// import serverOffices from '../routes/officies';
let serverOffices = require('../routes/officies');

chai.use(chaiHttp);

// UNIT test begin
describe('Offices API Integration Tests', () => {
  describe('#GET /officies', () => {
    it('should get all officies', done => {
      chai
        .request(serverOffices)
        .get('/officies')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          done();
        });
    });

    it('should get a single office', done => {
      const id = 1;
      chai
        .request(serverOffices)
        .get(`/officies/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });

  describe('#POST /officies', () => {
    it('should post a single office', done => {
      chai
        .request(serverOffices)
        .post('/officies')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.be.a('object');
          done();
        });
    });
  });
});
