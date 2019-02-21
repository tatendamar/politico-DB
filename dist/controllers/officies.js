"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

require("regenerator-runtime/runtime");

require("@babel/polyfill");

var _v = _interopRequireDefault(require("uuid/v4"));

var _moment = _interopRequireDefault(require("moment"));

var _index = _interopRequireDefault(require("../models/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv.default.config();

var postOffice =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, user_id, createQuery, values, rows;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, user_id = _req$body.user_id;
            createQuery = "INSERT INTO officies(id,name, created_date,modified_date,user_id) VALUES($1,$2,$3,$4,$5)";
            values = [(0, _v.default)(), name, (0, _moment.default)(new Date()), (0, _moment.default)(new Date()), user_id];
            _context.prev = 3;
            _context.next = 6;
            return _index.default.query(createQuery, values);

          case 6:
            rows = _context.sent;
            return _context.abrupt("return", res.status(201).send({
              status: 201,
              rows: rows.rows[0],
              message: 'office posted successfully'
            }));

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](3);
            console.log(_context.t0);
            return _context.abrupt("return", res.status(400).send(_context.t0));

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 10]]);
  }));

  return function postOffice(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var getOffices =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var allQuery, rows;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            allQuery = 'SELECT * FROM officies';
            _context2.prev = 1;
            _context2.next = 4;
            return _index.default.query(allQuery);

          case 4:
            rows = _context2.sent;
            return _context2.abrupt("return", res.status(200).send({
              status: 200,
              data: rows
            }));

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            return _context2.abrupt("return", res.status(400).send(_context2.t0));

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[1, 8]]);
  }));

  return function getOffices(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var getOffice =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var id, singleQuery, rows, newVar;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.officeId;
            singleQuery = "SELECT * FROM officies WHERE id = $1";
            _context3.prev = 2;
            _context3.next = 5;
            return _index.default.query(singleQuery, [id]);

          case 5:
            rows = _context3.sent;
            newVar = rows.rows[0].id;
            console.log(newVar);

            if (rows.rows[0]) {
              _context3.next = 10;
              break;
            }

            return _context3.abrupt("return", res.status(404).send({
              message: 'not found'
            }));

          case 10:
            return _context3.abrupt("return", res.status(200).send(rows.rows[0]));

          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](2);
            console.log(_context3.t0);
            return _context3.abrupt("return", res.status(400).send(_context3.t0));

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[2, 13]]);
  }));

  return function getOffice(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var createCandidate =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body2, office_id, user_id, party_id, createQuery, values, rows;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, office_id = _req$body2.office_id, user_id = _req$body2.user_id, party_id = _req$body2.party_id;
            createQuery = "INSERT INTO candidates(id,office_id,user_id,created_date,modified_date,party_id) VALUES($1,$2,$3,$4,$5,$6)";
            values = [(0, _v.default)(), office_id, user_id, (0, _moment.default)(new Date()), (0, _moment.default)(new Date()), party_id];
            _context4.prev = 3;
            _context4.next = 6;
            return _index.default.query(createQuery, values);

          case 6:
            rows = _context4.sent;
            console.log(rows[0]);
            return _context4.abrupt("return", res.status(201).send({
              rows: rows[0],
              message: 'candidated created successfully'
            }));

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](3);
            console.log(_context4.t0);
            return _context4.abrupt("return", res.status(400).send(_context4.t0));

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this, [[3, 11]]);
  }));

  return function createCandidate(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var _default = {
  postOffice: postOffice,
  getOffices: getOffices,
  getOffice: getOffice,
  createCandidate: createCandidate
};
exports.default = _default;