import officies from '../controllers/officies';
import vote from '../controllers/vote';
import petition from '../controllers/petition';
//const app = require('express')();
import Auth from '../middleware/auth';
import express from 'express';
const app = express();

app
  // .route('/offices', Auth.verifyToken)
  .get('/offices', officies.getOffices)
  .post('/offices', Auth.verifyToken, officies.postOffice)
  .get('/offices/:officeId', officies.getOffice)
  .post('/:officeId/register', Auth.verifyToken, officies.createCandidate)
  .post('/votes', Auth.verifyToken, vote.vote)
  .post('/petition', Auth.verifyToken, petition.petition);

export default app;
