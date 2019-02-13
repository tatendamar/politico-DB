"use strict";

var office = require('../models/officies');

var currentId = 2; //get parties

var getOfficies = function getOfficies(req, res) {
  res.send({
    office: office
  });
}; //get a party by id


var getOffice = function getOffice(req, res) {
  var id = req.params.officeId;
  var found = office['data'].find(function (office) {
    return office.id === parseInt(id);
  });

  if (found) {
    return res.send({
      status: office.status,
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
  // let id = req.body.id;
  var name = req.body.name;
  var type = req.body.type;
  currentId++;
  var newOffice = {
    id: currentId,
    name: name,
    type: type // dateCreated: day

  };
  office['data'].push(newOffice);
  res.send({
    status: 201,
    data: [{
      id: newOffice.id,
      name: newOffice.name,
      type: newOffice.type // dateCreated: day

    }]
  });
};

module.exports = {
  getOfficies: getOfficies,
  getOffice: getOffice,
  postOffice: postOffice
};