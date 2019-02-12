let chaiHttp = require('chai-http');
let chai = require('chai');
let should = chai.should();
let expect = chai.expect;

const serverParty = require('../routes/parties');

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

  describe('/PUT party', () => {
    it('should EDIT a party with name field', done => {
      const id = 1;
      chai
        .request(serverParty)
        .put(`/parties/${id}`)
        .send({
          id: 1,
          name: 'Rexford'
        })

        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });

  describe('/POST party', () => {
    it('should POST a party with name field', done => {
      chai
        .request(serverParty)
        .post(`/parties`)
        .send({
          name: 'Rexford',
          address: 'fkmkmfmvk'
        })

        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          done();
        });
    });
  });
});
