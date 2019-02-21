process.env.NODE_ENV = 'test';

import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../index';

const should = chai.should();
const dotenv = require('dotenv');

dotenv.config();

let partyId = '04f08196-af49-4d13-8856-c13c9ab28fe2';
let officeId = '9dba250c-b229-46e4-9dab-583d90ef8117';

const editName = { name: 'alvin' };
let user;
const loginUser = {
  password: '12345',
  email: 'rud@gmail.com'
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

const newOffice = {
  name: 'new office from test'
};

describe('POST /api/v1/login', () => {
  it('should login a user', done => {
    chai
      .request(server)
      .post('/api/v1/auth/login')
      .send(loginUser)
      .end((err, res) => {
        res.should.have.status(201);
        user = res.body.token;
        //console.log(user);

        done();
      });
  });
});

describe('POST /api/v1/parties', () => {
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

describe('GET /api/v1/party', () => {
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

describe('POST /offices', () => {
  it('It should create a new office', done => {
    chai
      .request(server)
      .post('/api/v1/offices')
      .set('authorization', user)
      .send(newOffice)
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });
});

describe('GET /offices', () => {
  it('It should return all offices', done => {
    chai
      .request(server)
      .get(`/api/v1/offices/${officeId}`)
      .set('authorization', user)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body)
          .to.have.property('data')
          .and.to.be.an('array');
        done();
      });
  });
});
