"use strict";

var Joi = require('joi');

var JSON = require('circular-json'); //import check from 'express-validator/check';


var party = require('../models/parties');

var currentId = 2; //get parties

var getParties = function getParties(req, res) {
  res.send({
    party: party
  });
}; //get a party by id


var getParty = function getParty(req, res) {
  var id = req.params.partyId;
  var found = party['data'].find(function (party) {
    return party.id === parseInt(id);
  });

  if (found) {
    return res.send({
      status: party.status,
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
  var createPartySchema = Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().email(),
    address: Joi.string().alphanum().min(4).max(50),
    city: Joi.string().alphanum().min(2).max(30),
    logo: Joi.string()
  });
  var data = req.body;
  currentId++;
  Joi.validate(data, createPartySchema, function (err, result) {
    if (err) {
      res.status(442).json({
        status: 'error',
        message: 'Invalid request data',
        data: data
      });
    } else {
      party['data'].push(res.json({
        status: 'success',
        message: 'User created successfully',
        data: Object.assign({
          id: currentId
        }, result)
      }));
    }
  });
}; // let id = req.body.id;
// let name = req.body.name;
// let email = req.body.email;
// let address = req.body.address;
// let city = req.body.city;
// let logo = req.body.logo;
// currentId++;
//let newPart = {
//   id: currentId,
//name: .name
//   email: email,
//   address: address,
//   city: city,
//   logo: logo
// };
// party['data'].push(createPartySchema.getRe);
// res.send({
//   status: party.status,
//   data: [
//     {
//       id: newPart.id,
//       name: newPart.name,
//       email: newPart.email,
//       address: newPart.address,
//       city: newPart.city,
//       logo: newPart.logo
//       // dateCreated: day
//     }
//   ]
// });
//};
//edit parties


var editParty = function editParty(req, res) {
  var id = req.params.partyId;
  var newName = req.body.name;
  var found = party['data'].find(function (party) {
    return party.id === parseInt(id);
  });

  if (found) {
    found.name = newName;
    return res.send({
      status: party.status,
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
  party['data'].forEach(function (party, index, array) {
    if (!found && party.id === parseInt(id)) {
      array.splice(index, 1);
    }
  });
  res.send({
    status: party.status,
    data: [{
      maessage: 'party deleted successfully'
    }]
  });
};

module.exports = {
  getParties: getParties,
  getParty: getParty,
  postParty: postParty,
  editParty: editParty,
  deleteParty: deleteParty
};