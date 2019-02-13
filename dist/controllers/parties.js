"use strict";

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
  // let id = req.body.id;
  var name = req.body.name;
  var email = req.body.email;
  var address = req.body.address;
  var city = req.body.city;
  var logo = req.body.logo;
  currentId++;
  var newPart = {
    id: currentId,
    name: name,
    email: email,
    address: address,
    city: city,
    logo: logo
  };
  party['data'].push(newPart);
  res.send({
    status: party.status,
    data: [{
      id: newPart.id,
      name: newPart.name,
      email: newPart.email,
      address: newPart.address,
      city: newPart.city,
      logo: newPart.logo // dateCreated: day

    }]
  });
}; //edit parties


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