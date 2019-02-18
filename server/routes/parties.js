import parties from '../controllers/parties';
const app = require('express')();

app
  .route('/parties')
  .get(parties.getParties)
  .post(parties.postParty);
// app
//   .route('/parties/:partyId')
//   .get(parties.getParty)
//   .put(parties.editParty)
//   .delete(parties.deleteParty);

export default app;
