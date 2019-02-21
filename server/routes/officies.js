import officies from '../controllers/officies';
import vote from '../controllers/vote';
import petition from '../controllers/petition';
//const app = require('express')();
import Auth from '../middleware/auth';
import express from 'express';
const app = express();

app
  // .route('/offices', Auth.verifyToken)
  .get('/offices', Auth.verifyToken, officies.getOffices)
  .post('/offices', Auth.verifyToken, officies.postOffice)
  .get('/offices/:officeId', Auth.verifyToken, officies.getOffice)
  .post('/:officeId/register', officies.createCandidate)
  .post('/votes', vote.vote)
  .post('/petition', petition.petition);

export default app;
