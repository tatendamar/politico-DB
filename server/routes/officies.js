import officies from '../controllers/officies';
//const app = require('express')();
import Auth from '../middleware/auth';
import express from 'express';
const app = express();

app
  // .route('/offices', Auth.verifyToken)
  .get('/offices', Auth.verifyToken, officies.getOffices)
  .post('/offices', Auth.verifyToken, officies.postOffice)
  .get('/offices/:officeId', Auth.verifyToken, officies.getOffice);

export default app;
