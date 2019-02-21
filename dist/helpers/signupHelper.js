"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var hashPassword = function hashPassword(password) {
  return _bcrypt.default.hashSync(password, _bcrypt.default.genSaltSync(8));
};

var comparePassword = function comparePassword(hashPassword, password) {
  return _bcrypt.default.compareSync(password, hashPassword);
};

var isValidEmail = function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
};

var genToken = function genToken(id) {
  console.log(id);

  var token = _jsonwebtoken.default.sign({
    userId: id
  }, process.env.TOKEN_SECRET, {
    expiresIn: '1d'
  });

  console.log(token);
  return token;
};

var _default = {
  hashPassword: hashPassword,
  comparePassword: comparePassword,
  isValidEmail: isValidEmail,
  genToken: genToken
};
exports.default = _default;