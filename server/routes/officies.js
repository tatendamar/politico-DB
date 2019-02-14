const app = require('express')();
import officies from '../controllers/officies';

app
  .route('/officies')
  .get(officies.getOfficies)
  .post(officies.postOffice);
app.route('/officies/:officeId').get(officies.getOffice);

export default app;
