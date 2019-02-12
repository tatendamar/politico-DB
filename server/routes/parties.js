const app = require('express')();
import parties from '../controllers/parties';

app
  .route('/parties')
  .get(parties.getParties)
  .post(parties.postParty);
app
  .route('/parties/:partyId')

  .get(parties.getParty)
  .put(parties.editParty)
  .delete(parties.deleteParty);

export default app;
