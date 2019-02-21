"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pg = require("pg");

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

var pool = new _pg.Pool({
  connect: process.env.DATABASE_URL
});

var postParty = function postParty(req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      address = _req$body.address,
      email = _req$body.email,
      city = _req$body.city,
      logo = _req$body.logo;
  pool.query('INSERT INTO parties(id,name,address,email,city,logo,created_date,modified_date) VALUES($1,$2,$3,$4,$5,$6,$7,$8)', [(0, _v.default)(), name, address, email, city, logo, (0, _moment.default)(new Date()), (0, _moment.default)(new Date())], function (err, results) {
    if (err) {
      throw err;
    }

    res.status(201).send(results);
  });
};

var getParties = function getParties(req, res) {
  pool.query('SELECT * FROM parties', function (err, parties) {
    if (err) {
      throw err;
    }

    res.send({
      status: 200,
      data: parties.rows
    });
  });
}; // const getParty = (req, res) => {
//   const id = req.params.partyId;
//   pool.query('SELECT * FROM parties WHERE id = $1', [id], (err, party) => {
//     let found = party.rows.find(party => {
//       return party.id !== parseInt(id);
//     });
//     if (found) {
//       res.send({
//         status: 200,
//         data: found
//       });
//     } else {
//       //FIXME: failiing to return error object
//       return res.send({
//         status: 404,
//         message: 'Invalid party ID'
//       });
//     }
//   });
// };


var getParty =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var id, singleQuery, rows;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = req.params.partyId;
            singleQuery = "SELECT * FROM parties WHERE id = $1";
            _context.prev = 2;
            _context.next = 5;
            return _index.default.query(singleQuery, [id]);

          case 5:
            rows = _context.sent;

            if (rows.rows[0]) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", res.status(404).send({
              message: 'not found'
            }));

          case 8:
            return _context.abrupt("return", res.status(200).send({
              status: 200,
              data: rows.rows[0]
            }));

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0);
            return _context.abrupt("return", res.status(400).send(_context.t0));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[2, 11]]);
  }));

  return function getParty(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var editParty = function editParty(req, res) {
  var id = req.params.partyId;
  var name = req.body.name;
  pool.query('UPDATE parties SET name = $1 WHERE id = $2', [name, id], function (err, party) {
    if (party) {
      res.send({
        status: 200,
        message: "Party with Id: ".concat(id, " edited successfully!")
      });
    } else {
      //FIXME: ERROR NOT RETURNING
      return res.send({
        status: 404,
        message: 'Invalid party ID'
      });
    }
  });
};

var deleteParty = function deleteParty(req, res) {
  var id = req.params.partyId;
  pool.query('DELETE FROM parties WHERE id = $1', [id], function (err, party) {
    if (err) {
      throw err;
    }

    res.send({
      status: 200,
      message: "successfuly deleted party with id: ".concat(id)
    });
  });
};

var _default = {
  postParty: postParty,
  getParties: getParties,
  getParty: getParty,
  editParty: editParty,
  deleteParty: deleteParty
};
exports.default = _default;