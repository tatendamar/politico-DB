process.env.NODE_ENV = 'test';

import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../index';

const should = chai.should();
const dotenv = require('dotenv');

dotenv.config();

let partyId = 'c19918a0-a993-4fea-8342-49bc4b25e0d7';
const editName = { name: 'alvin' };

const loginUser = {
  email: 'kuda@new.com',
  password: '12345'
};

const { expect } = chai;
chai.use(chaiHttp);

const newParty = {
  name: 'Garnite',
  email: 'tatevf@hfhf.com',
  address: 'no 89 cross road',
  city: 'Cape Town',
  logo: 'https://farm7.staticflickr.com/6057/6262125702_a086dd49f1.jpg'
};

chai.request(server).post('/api/v1/auth/login');

describe('GET /api/v1/parties', () => {
  it('should post a party to the database', done => {
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
  it("should return a single party when given the party's id", done => {
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

describe('PUT /api/v1/parties', () => {
  it('should edit a party when given an ID', done => {
    chai
      .request(server)
      .put(`/api/v1/parties/${partyId}`)
      .send(editName)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

describe('DELETE /api/v1/parties', () => {
  it("should delete a party when giiven the party's id", done => {
    chai
      .request(server)
      .delete(`/api/v1/parties/${partyId}`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
