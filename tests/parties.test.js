let chaiHttp = require('chai-http');
var chai = require('chai');
let should = chai.should();

var serverParty = require('../api/routes/parties');

chai.use(chaiHttp);

describe('Parties API Integration Tests', () => {
  describe('#GET /parties', () => {
    it('should get all parties', done => {
      chai
        .request(serverParty)
        .get('/parties')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          done();
        });
    });

    it('should get a single party record', done => {
      const id = 1;
      chai
        .request(serverParty)
        .get(`/parties/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });

  describe('/DELETE/:id party', () => {
    it('it should DELETE a party given the id', done => {
      const id = 1;
      chai
        .request(serverParty)
        .delete(`/parties/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });
});
