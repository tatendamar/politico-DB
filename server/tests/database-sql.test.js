process.env.NODE_ENV = 'test';

import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../index';

const should = chai.should();
const dotenv = require('dotenv');

dotenv.config();

let partyId = '396afdb9-7d69-466d-8be1-9ced27a8f202';
let officeId = 'c2f264a2-1645-4d37-a7c0-4707f671be8b';

const editName = { name: 'alvin' };
let user;
const loginUser = {
  password: '12345',
  email: 'tend@gmail.com'
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

const castVote = {
  candidate: 'cc24b573-dc69-4722-9e7c-917c5c018d43',
  office: 'c2f264a2-1645-4d37-a7c0-4707f671be8b',
  createdby: '5228f8e8-b089-48e3-b49a-3e9cecae2719'
};

const newOffice = {
  name: 'new office from test',
  type: 'local government'
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

describe('POST /api/v1/votes', () => {
  it('should cast a vote to the database', done => {
    chai
      .request(server)
      .post('/api/v1/votes')
      .send(castVote)
      .end((err, res) => {
        +res.should.have.status(201);
        expect(res.body)
          .to.have.property('message')
          .and.to.have('string');
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
      .set('authorization', process.env.TEST_TOKEN)
      .send(newOffice)
      .end((err, res) => {
        newOffice.id = res.body.data[0].id;
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
