"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _officies = _interopRequireDefault(require("../models/officies"));

var _validateOffice2 = _interopRequireDefault(require("../helpers/validateOffice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var currentId = 2; //get parties

var getOfficies = function getOfficies(req, res) {
  res.send({
    office: _officies.default
  });
}; //get a party by id


var getOffice = function getOffice(req, res) {
  var id = req.params.officeId;

  var found = _officies.default['data'].find(function (office) {
    return office.id === parseInt(id);
  });

  if (found) {
    return res.send({
      status: _officies.default.status,
      data: found
    });
  } else {
    return res.send({
      status: 404,
      message: 'Not Found'
    });
  }
}; //post parties


var postOffice = function postOffice(req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      type = _req$body.type; //let data = req.body;

  currentId++;
  var newOffice = {
    id: currentId,
    name: name,
    type: type
  };

  var _validateOffice = (0, _validateOffice2.default)(req.body),
      err = _validateOffice.err;

  if (err) {
    res.send({
      status: 400,
      error: err.details[0].message
    });
  } else {
    null;
  }

  _officies.default['data'].push(newOffice);

  res.send({
    status: _officies.default.status,
    data: [{
      id: newOffice.id,
      name: newOffice.name,
      type: newOffice.type
    }]
  });
};

var _default = {
  getOfficies: getOfficies,
  getOffice: getOffice,
  postOffice: postOffice
};
exports.default = _default;