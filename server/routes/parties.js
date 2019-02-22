import parties from '../controllers/parties';
import Auth from '../middleware/auth';
import express from 'express';
const app = express();

app
  .get('/parties', parties.getParties)
  .post('/parties', Auth.verifyToken, parties.postParty)
  .get('/parties/:partyId', parties.getParty)
  .put('/parties/:partyId', parties.editParty)
  .delete('/parties/:partyId', parties.deleteParty);

export default app;
