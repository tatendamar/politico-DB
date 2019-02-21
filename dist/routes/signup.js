"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _signup = _interopRequireDefault(require("../controllers/auth/signup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = require('express')();

app.route('/signup').post(_signup.default.createUser);
var _default = app;
exports.default = _default;