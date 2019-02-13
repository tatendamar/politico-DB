const app = require('express')();
let officies = require('../controllers/officies');

app
  .route('/officies')
  .get(officies.getOfficies)
  .post(officies.postOffice);
app.route('/officies/:officeId').get(officies.getOffice);

module.exports = app;
