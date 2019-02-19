import officies from '../controllers/officies';
const app = require('express')();

app
  .route('/offices')
  .get(officies.getOffices)
  .post(officies.postOffice);
app.route('/offices/:officeId').get(officies.getOffice);

export default app;
