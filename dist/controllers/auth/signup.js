"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pg = require("pg");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _v = _interopRequireDefault(require("uuid/v4"));

var _moment = _interopRequireDefault(require("moment"));

var _signupHelper = _interopRequireDefault(require("../../helpers/signupHelper"));

var _index = _interopRequireDefault(require("../../models/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv.default.config();

var createUser =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var hashPassword, _req$body, firstname, lastname, email, phonenumber, passporturl, createQuery, values, _ref2, rows, token;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!req.body.email || !req.body.password)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              message: 'missing email and password'
            }));

          case 2:
            if (_signupHelper.default.isValidEmail(req.body.email)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              message: 'enter valid email address'
            }));

          case 4:
            hashPassword = _signupHelper.default.hashPassword(req.body.password);
            _req$body = req.body, firstname = _req$body.firstname, lastname = _req$body.lastname, email = _req$body.email, phonenumber = _req$body.phonenumber, passporturl = _req$body.passporturl;
            createQuery = "INSERT INTO users(id, firstname, lastname, email, phonenumber, password, passporturl, created_date, modified_date) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)\n    returning *";
            values = [(0, _v.default)(), firstname, lastname, email, phonenumber, hashPassword, passporturl, (0, _moment.default)(new Date()), (0, _moment.default)(new Date())];
            _context.prev = 8;
            _context.next = 11;
            return _index.default.query(createQuery, values);

          case 11:
            _ref2 = _context.sent;
            rows = _ref2.rows;
            console.log(rows);
            token = _signupHelper.default.genToken(rows[0].id);
            console.log(token);
            return _context.abrupt("return", res.status(201).send({
              token: token
            }));

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](8);

            if (!(_context.t0.routine === '_bt_check_unique')) {
              _context.next = 23;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              message: 'User '
            }));

          case 23:
            return _context.abrupt("return", res.status(400).send(_context.t0));

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[8, 19]]);
  }));

  return function createUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = {
  createUser: createUser
};
exports.default = _default;