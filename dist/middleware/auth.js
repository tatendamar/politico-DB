"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _index = _interopRequireDefault(require("../models/index"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv.default.config();

var verifyToken =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var token, decoded, text, _ref2, rows;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = req.headers['x-access-token']; // console.log(req.body);

            if (token) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              message: 'Token is not provided'
            }));

          case 3:
            _context.prev = 3;
            _context.next = 6;
            return _jsonwebtoken.default.verify(token, process.env.TOKEN_SECRET);

          case 6:
            decoded = _context.sent;
            text = 'SELECT * FROM users WHERE id = $1';
            _context.next = 10;
            return _index.default.query(text, [decoded.userId]);

          case 10:
            _ref2 = _context.sent;
            rows = _ref2.rows;

            if (rows[0]) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              message: 'the token you provided is invalid'
            }));

          case 14:
            req.user = {
              id: decoded.userId
            }; // console.log(req.user);

            next();
            _context.next = 21;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](3);
            return _context.abrupt("return", res.status(400).send(_context.t0));

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 18]]);
  }));

  return function verifyToken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = {
  verifyToken: verifyToken
};
exports.default = _default;