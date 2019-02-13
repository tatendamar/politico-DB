let chaiHttp = require('chai-http');
let chai = require('chai');
let should = chai.should();

// This agent refers to PORT where program is runninng.

const serverOffices = require('../routes/officies');

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

  describe('#GET /officies', () => {
    it('should post a single office', done => {
      chai
        .request(serverOffices)
        .post('/officies')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          done();
        });
    });
  });
});
