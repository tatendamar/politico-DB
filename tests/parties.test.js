let chaiHttp = require('chai-http');
let chai = require('chai');
let should = chai.should();
let expect = chai.expect;

var serverParty = require('../api/routes/parties');

chai.use(chaiHttp);

let party = {
  name: 'Rexford',
  email: 'email@email.com'
};

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

  describe('/PUT party', () => {
    it('should EDIT a party with name field', done => {
      const id = 1;
      chai
        .request(serverParty)
        .put(`/parties/${id}`)
        .send({ name: '123' })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.be.a('object');
          done();
        });
    });
  });
});
