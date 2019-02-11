let chaiHttp = require('chai-http');
let chai = require('chai');
let should = chai.should();
let expect = chai.expect;

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

  describe('/PUT party', () => {
    it('should EDIT a party with name field', done => {
      const id = 1;

      let options = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      chai
        .request(serverParty)
        .put(`/parties/${id}`)
        //.set('Content-Type', 'application/json')
        .send({
          // status: 201,
          id: 1,
          name: 'Rexford'
        })

        .then(res => {
          expect(res).to.have.status(201);
          expect(res).to.be.a('object');
          expect(res).to.have.property('name');
        });

      done();

      //});
    });
  });
});
