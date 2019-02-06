//var request = require('supertest');
let chaiHttp = require('chai-http');
var chai = require('chai');
// var expect = require('chai').expect;
let should = chai.should();

// This agent refers to PORT where program is runninng.

var serverParty = require('../api/routes/parties');

chai.use(chaiHttp);
// UNIT test begin

describe('Parties API Integration Tests', function() {
  describe('#GET /parties', function() {
    it('should get all parties', function(done) {
      chai
        .request(serverParty)
        .get('/parties')
        .end(function(err, res) {
          res.should.have.status(200);
          res.should.be.a('object');
          done();
        });
    });
  });

  // describe('/POST book', () => {
  //   it('it should not POST a book without pages field', done => {
  //     let party = {
  //       name: 'New Poetr',
  //       address: 'no 6 nelson mandela way',
  //       email: 'tatevf@hfhf.com',
  //       city: 'Cape Town',
  //       logo:
  //         'https://pixabay.com/get/ea35b2072cf71c22d2524518b7444795ea76e5d004b014459cf1c17aaeebb2_340.png'
  //     };
  //     chai
  //       .request('http://localhost:4000')
  //       .post('/parties')
  //       .send(party)
  //       .set('Content-Type', 'application/json')
  //       // .set('Accept', 'application/json')
  //       .end((err, res) => {
  //         res.should.have.status(200);
  //         // res.body.should.be.a('object');
  //         chai.expect(JSON.parse(res.body));
  //         done();
  //       });
  //   });
  // });
});
//   describe('get offices', () => {
//     it('should get the office', done => {
//       request(serverOffice)
//         .get('/offices')
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(200, done);
//     });
//   });
//   describe('post', () => {
//     it('should post', done => {
//       let data = {
//         name: 'New Poetr',
//         address: 'no 6 nelson mandela way',
//         email: 'tatevf@hfhf.com',
//         city: 'Cape Town',
//         logo:
//           'https://pixabay.com/get/ea35b2072cf71c22d2524518b7444795ea76e5d004b014459cf1c17aaeebb2_340.png'
//       };
//       request(serverParty)
//         .post('/parties', data)
//         .set('Content-Type', 'application/json')
//         .set('Accept', 'application/json')
//         .expect(200, done);
//     });
//   });
// });

//   describe('/POST party', () => {
//     it('it should not POST a book without pages field', done => {
//       let party = {
//         address: 'no 6 nelson mandela way',
//         email: 'tatevf@hfhf.com',
//         city: 'Cape Town',
//         logo:
//           'https://pixabay.com/get/ea35b2072cf71c22d2524518b7444795ea76e5d004b014459cf1c17aaeebb2_340.png'
//       };
//       chai
//         .request('http://localhost:4000')
//         .post('/parties')
//         .send(party)
//         .set('Content-Type', 'application/json')
//         .set('Accept', 'application/json')
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('object');
//           res.body.should.have.property('object');
//           res.body.errors.should.have.property('name');
//           // res.body.errors.pages.should.have.property('kind').eql('required');
//           done();
//         });
//     });

//     it('it should POST a book ', done => {
//       let party = {
//         name: 'New Poetr',
//         address: 'no 6 nelson mandela way',
//         email: 'tatevf@hfhf.com',
//         city: 'Cape Town',
//         logo:
//           'https://pixabay.com/get/ea35b2072cf71c22d2524518b7444795ea76e5d004b014459cf1c17aaeebb2_340.png'
//       };
//       chai
//         .request(server)
//         .post('/parties')
//         .send(party)
//         .set('Content-Type', 'application/json')
//         .set('Accept', 'application/json')
//         .end((err, res) => {
//           res.should.have.status(201);
//           res.body.should.be.a('object');
//           res.body.should.have
//             .property('message')
//             .eql('Book successfully added!');
//           res.body.party.should.have.property('name');
//           res.body.party.should.have.property('address');
//           res.body.party.should.have.property('email');
//           res.body.party.should.have.property('city');
//           res.body.party.should.have.property('logo');
//           done();
//         });
//     });
//   });

//   //

//   describe('/GET/:id book', () => {
//     it('it should GET a book by the given id', done => {
//       let party = {
//         name: 'New Poetr',
//         address: 'no 6 nelson mandela way',
//         email: 'tatevf@hfhf.com',
//         city: 'Cape Town',
//         logo:
//           'https://pixabay.com/get/ea35b2072cf71c22d2524518b7444795ea76e5d004b014459cf1c17aaeebb2_340.png'
//       };

//       chai
//         .request(server)
//         .get('/book/' + party.id)
//         .send(party)
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('object');
//           res.body.should.have.property('name');
//           res.body.should.have.property('address');
//           res.body.should.have.property('email');
//           res.body.should.have.property('city');
//           res.body.should.have.property('logo');
//           res.body.should.have.property('_id').eql(party.id);
//           done();
//         });
//     });
//   });
// });

//   describe('Get a task by id', function() {
//     it('should get a task', function(done) {
//       let party = {
//         name: 'New Poetr',
//         address: 'no 6 nelson mandela way',
//         email: 'tatevf@hfhf.com',
//         city: 'Cape Town',
//         logo:
//           'https://pixabay.com/get/ea35b2072cf71c22d2524518b7444795ea76e5d004b014459cf1c17aaeebb2_340.png'
//       };

//       party.save((err, party) => {
//         supertest(server)
//           .get('/parties/' + party.id)
//           .send(party)
//           .end(function(err, res) {
//             expect(res.statusCode).to.equal(200);
//             expect(res.body.name).to.equal('name');
//             expect(res.body.address).to.equal('address');
//             expect(res.body.email).to.equal('email');
//             expect(res.body.city).to.equal('city');
//             expect(res.body.logo).to.equal('logo');
//             expect(res.body._id).to.equal(party.id);
//             done();
//           });
//       });
//     });
//   });
// });

// const alwaysTrue = () => true;

// const { alwaysTrue } = require('./example');

// chai.should();

// describe('#mocha basics', () => {
//   it('true should be true', () => {
//     true.should.be.true;
//   });
//   it('Iexpect true to be true', () => {
//     expect(true).to.be.true;
//   });
// });

// describe('#alwaysTrue', () => {
//   it('should always return true', () => {
//     alwaysTrue().should.be.true;
//   });
//   it('I expect it to always be true', () => {
//     expect(alwaysTrue()).to.be.true;
//   });
//   it('should not be false', () => {
//     alwaysTrue().should.not.be.false;
//   });
// });

// describe('capitalize', () => {
//   it('should capitalize asingle word', () => {
//     expect(capitalize('express')).to.equal('Express');
//     expect(capitalize('cats')).to.equal('Cats');
//   });
//   it('Should make the rest of the string lowercase', () => {
//     expect(capitalize('javascript')).to.equal('Javascript');
//   });
//   it('Should leave empty strings alone', () => {
//     expect(capitalize(' ')).to.equal(' ');
//     expect(capitalize('123')).to.equal('123');
//   });
//   it('Should capitalize multiple-word strings', () => {
//     expect(capitalize('what is Express')).to.equal('What is express');
//     expect(capitalize('i love lamp')).to.equal('I love lamp');
//   });

//   it('Should leave already capitalized words alone', () => {
//     expect(capitalize('Express')).to.equal('Express');
//     expect(capitalize('Evan')).to.equal('Evan');
//     expect(capitalize('Catman')).to.equal('Catman');
//   });
//   it('Should capitalize String objects without changing their values', () => {
//     const str = new String('who is Javascript');
//     expect(capitalize(str)).to.equal('Who is javascript');
//     expect(str.valueOf()).to.equal('who is Javascript');
//   });
//   it('Should throw an error if passed a number', () => {
//     expect(() => {
//       capitalize(123);
//     }).to.throw(Error);
//   });
// });
