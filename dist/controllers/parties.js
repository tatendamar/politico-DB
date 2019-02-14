"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validateParty = _interopRequireDefault(require("../helpers/validateParty"));

var _parties = _interopRequireDefault(require("../models/parties"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import check from 'express-validator/check';
var currentId = 2; //get parties

var getParties = function getParties(req, res) {
  res.send({
    party: _parties.default
  });
}; //get a party by id


var getParty = function getParty(req, res) {
  var id = req.params.partyId;

  var found = _parties.default['data'].find(function (party) {
    return party.id === parseInt(id);
  });

  if (found) {
    return res.send({
      status: _parties.default.status,
      data: found
    });
  } else {
    return res.send({
      status: 404,
      message: 'Not Found'
    });
  }
}; //post parties


var postParty = function postParty(req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      address = _req$body.address,
      email = _req$body.email,
      city = _req$body.city,
      logo = _req$body.logo; //let data = req.body;

  currentId++;
  var newParty = {
    id: currentId,
    name: name,
    email: email,
    address: address,
    city: city,
    logo: logo
  };
  var err = (0, _validateParty.default)(req.body);
  console.log('JOI Error is', err['error'].details.map(function (n) {
    return console.log(n);
  }));
  var error = err['error'].details.map(function (n) {
    return n.message;
  });
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = error[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;
      console.log(i);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  console.log(error);

  if (!name || !email) {
    return res.send({
      status: 400,
      error: error
    });
  }

  _parties.default['data'].push(newParty);

  res.send({
    status: _parties.default.status,
    data: [{
      id: newParty.id,
      name: newParty.name,
      email: newParty.email,
      address: newParty.address,
      city: newParty.city,
      logo: newParty.logo // dateCreated: day

    }]
  });
}; //edit parties


var editParty = function editParty(req, res) {
  var id = req.params.partyId;
  var newName = req.body.name;

  var found = _parties.default['data'].find(function (party) {
    return party.id === parseInt(id);
  });

  if (found) {
    found.name = newName;
    return res.send({
      status: _parties.default.status,
      data: found
    });
  } else {
    return res.send({
      status: 404,
      message: 'Not Found'
    });
  }
}; //delete parties


var deleteParty = function deleteParty(req, res) {
  var id = req.params.partyId;
  var found = false;

  _parties.default['data'].forEach(function (party, index, array) {
    if (!found && party.id === parseInt(id)) {
      array.splice(index, 1);
    }
  });

  res.send({
    status: _parties.default.status,
    data: [{
      maessage: 'party deleted successfully'
    }]
  });
};

var _default = {
  getParties: getParties,
  getParty: getParty,
  postParty: postParty,
  editParty: editParty,
  deleteParty: deleteParty
};
exports.default = _default;