const app = require('express')();
import parties from '../controllers/parties';

app
  .route('/parties')
  .get(parties.getParties)
  .post(parties.postParty);
app
  .route('/parties/:partyId')
  .get(parties.getParty)
  .delete(parties.deleteParty);
app.route('/parties/:partyId/name').put(parties.editParty);

export default app;
