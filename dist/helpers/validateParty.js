"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validateParty = function validateParty(party) {
  var schema = {
    name: _joi.default.string().min(2).max(30).required(),
    email: _joi.default.string().email().required(),
    address: _joi.default.string().alphanum().min(4).max(50).required(),
    city: _joi.default.string().min(2).max(30).required(),
    logo: _joi.default.string().required()
  };
  var options = {
    language: {
      msg: '{{msg}}'
    }
  };
  return _joi.default.validate(party, schema, options);
};

var _default = validateParty;
exports.default = _default;