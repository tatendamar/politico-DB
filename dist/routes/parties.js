"use strict";

var app = require('express')();

var parties = require('../controllers/parties');

app.route('/parties').get(parties.getParties).post(parties.postParty);
app.route('/parties/:partyId').get(parties.getParty).put(parties.editParty).delete(parties.deleteParty);
module.exports = app;