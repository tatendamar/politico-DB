"use strict";

var app = require('express')();

var officies = require('../controllers/officies');

app.route('/officies').get(officies.getOfficies).post(officies.postOffice);
app.route('/officies/:officeId').get(officies.getOffice);
module.exports = app;