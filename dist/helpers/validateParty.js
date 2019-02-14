"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Joi = require('joi');

var validateParty = function validateParty(party) {
  var schema = {
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().email().required(),
    address: Joi.string().alphanum().min(4).max(50).required(),
    city: Joi.string().min(2).max(30).required(),
    logo: Joi.string().required()
  };
  var options = {
    language: {
      msg: '{{msg}}'
    }
  };
  return Joi.validate(party, schema, options);
};

var _default = validateParty;
exports.default = _default;