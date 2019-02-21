"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _officies = _interopRequireDefault(require("../controllers/officies"));

var _auth = _interopRequireDefault(require("../middleware/auth"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const app = require('express')();
var app = (0, _express.default)();
app // .route('/offices', Auth.verifyToken)
.get('/offices', _auth.default.verifyToken, _officies.default.getOffices).post('/offices', _auth.default.verifyToken, _officies.default.postOffice).get('/offices/:officeId', _auth.default.verifyToken, _officies.default.getOffice).post('/:officeId/register', _officies.default.createCandidate);
var _default = app;
exports.default = _default;