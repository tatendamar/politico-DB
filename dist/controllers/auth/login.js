"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _loginHelper = _interopRequireDefault(require("../../helpers/loginHelper"));

var _index = _interopRequireDefault(require("../../models/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv.default.config();

var login =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var textQuery, rows, token;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!req.body.email || !req.body.password)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              message: ' missing fields'
            }));

          case 2:
            if (_loginHelper.default.isValidEmail(req.body.email)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              message: 'enter valid email address'
            }));

          case 4:
            textQuery = 'SELECT * FROM users WHERE email = $1';
            _context.prev = 5;
            _context.next = 8;
            return _index.default.query(textQuery, [req.body.email]);

          case 8:
            rows = _context.sent;

            if (rows.rows[0]) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              message: 'The email you provided could not be found'
            }));

          case 11:
            if (_loginHelper.default.comparePassword(rows.rows[0].password, req.body.password)) {
              _context.next = 13;
              break;
            }

            return _context.abrupt("return", res.status(200).send({
              message: 'password incorrect'
            }));

          case 13:
            token = _loginHelper.default.genToken(rows.rows[0].id); //console.log(token);

            return _context.abrupt("return", res.status(201).send({
              status: 201,
              token: token
            }));

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](5);
            console.log(_context.t0);
            return _context.abrupt("return", res.status(400).send(_context.t0));

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[5, 17]]);
  }));

  return function login(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = {
  login: login
};
exports.default = _default;