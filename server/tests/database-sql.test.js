process.env.NODE_ENV = 'test';

import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../index';

const should = chai.should();
const dotenv = require('dotenv');

dotenv.config();

// const pool = new Pool({
//   connect: process.env.TEST_DATABASE_URL
// });
let partyId = 'c19918a0-a993-4fea-8342-49bc4b25e0d7';
const editName = {"name" : "alvin"};

const { expect } = chai;

const newParty = {
  name: 'Garnite',
  email: 'tatevf@hfhf.com',
  address: 'no 89 cross road',
  city: 'Cape Town',
  logo: 'https://farm7.staticflickr.com/6057/6262125702_a086dd49f1.jpg'
};

chai.use(chaiHttp);

describe('GET /api/v1/parties', () => {
  it('should return post a party', done => {
    chai
      .request(server)
      .post('/api/v1/parties')
      .send(newParty)
      .end((err, res) => {
        res.should.have.status(201);
        expect(res.body)
          .to.have.property('rows')
          .and.to.be.an('array');
        done();
      });
  });
});

describe('GET /api/v1/parties', () => {
  it('should return all parties', done => {
    chai
      .request(server)
      .get('/api/v1/parties')
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body)
          .to.have.property('data')
          .and.to.be.an('array');
        done();
      });
  });
});

describe('GET /api/v1/parties', () => {
  it('should return a single party', done => {
    chai
      .request(server)
      .get(`/api/v1/parties/${partyId}`)
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body)
          .to.have.property('data')
          .and.to.be.an('object');
        done();
      });
  });
});

describe('GET /api/v1/parties', () => {
  it('should edit a  party', done => {
    chai
      .request(server)
      .put(`/api/v1/parties/${partyId}`)
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body)
          .to.have.property('data')
          .and.to.be.an('object');
        done();
      });
  });
});
