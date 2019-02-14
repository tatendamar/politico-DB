// import chaiHttp from 'chai-http';
// import chai from 'chai';
let chaiHttp = require('chai-http');
let chai = require('chai');

let should = chai.should();
let expect = chai.expect;

//import serverParty from '../routes/parties';
let serverParty = require('../routes/parties');

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
          expect(res).to.be.a('object');
          done();
        });
    });
  });

  describe('/POST party', () => {
    it('should not POST a party without these fields', done => {
      const party = {
        name: 'Garnite',
        email: 'tatevf@hfhf.com',
        address: 'no 89 cross road',
        city: 'Cape Town',
        logo: 'https://farm7.staticflickr.com/6057/6262125702_a086dd49f1.jpg'
      };

      chai
        .request(serverParty)
        .post(`/parties`)

        .end((err, res) => {
          if (
            !party.name ||
            !party.email ||
            !party.address ||
            !party.city ||
            party.logo
          ) {
            expect(res).to.have.a('object');
            //expect(res.body).to.have.property('message');
            done(err);
          }
        });
    });

    it('should POST a party with name field', done => {
      const party = {
        status: 201,
        name: 'Garnite',
        email: 'tatevf@hfhf.com',
        address: 'no 89 cross road',
        city: 'Cape Town',
        logo: 'https://farm7.staticflickr.com/6057/6262125702_a086dd49f1.jpg'
      };

      chai
        .request(serverParty)
        .post(`/parties`)
        .end((err, res) => {
          if (party.name && party.email) {
            expect({}).to.exist;
            expect(err).to.be.null;
            expect(res).to.have.a('object');
            //expect(res.body.status).to.be.equal(true);
            expect(res.body)
              .to.have.property('status')
              .equal(201);

            done(err);
          }
        });
    });
  });
});
