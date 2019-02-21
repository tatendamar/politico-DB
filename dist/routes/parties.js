"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _parties = _interopRequireDefault(require("../controllers/parties"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = require('express')();

app.route('/parties').get(_parties.default.getParties).post(_parties.default.postParty);
app.route('/parties/:partyId').get(_parties.default.getParty).put(_parties.default.editParty).delete(_parties.default.deleteParty);
var _default = app;
exports.default = _default;