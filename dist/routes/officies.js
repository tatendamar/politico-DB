"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _officies = _interopRequireDefault(require("../controllers/officies"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = require('express')();

app.route('/officies').get(_officies.default.getOfficies).post(_officies.default.postOffice);
app.route('/officies/:officeId').get(_officies.default.getOffice);
var _default = app;
exports.default = _default;