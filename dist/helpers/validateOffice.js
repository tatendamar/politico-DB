"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validateOffice = function validateOffice(office) {
  var schema = {
    name: _joi.default.string().min(2).max(30).required(),
    type: _joi.default.string().min(2).max(30).required()
  };
  var options = {
    language: {
      msg: '{{msg}}'
    }
  };
  return _joi.default.validate(office, schema, options);
};

var _default = validateOffice;
exports.default = _default;