let chaiHttp = require('chai-http');
let chai = require('chai');
let should = chai.should();

// This agent refers to PORT where program is runninng.

let serverOffices = require('../api/routes/offices');

chai.use(chaiHttp);

// UNIT test begin
describe('Offices API Integration Tests', () => {
  describe('#GET /offices', () => {
    it('should get all offices', done => {
      chai
        .request(serverOffices)
        .get('/offices')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          done();
        });
    });

    it('should get a single student record', done => {
      const id = 1;
      chai
        .request(serverOffices)
        .get(`/offices/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });
});
