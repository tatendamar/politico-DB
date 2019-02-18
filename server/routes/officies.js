import officies from '../controllers/officies';
const app = require('express')();

app
  .route('/officies')
  // .get(officies.getOfficies)
  .post(officies.postOffice);
//app.route('/officies/:officeId').get(officies.getOffice);

export default app;
