let Joi = require('joi');
const validateParty = require('../helpers/validateParty');
//import check from 'express-validator/check';
let party = require('../models/parties');

let currentId = 2;

//get parties
let getParties = (req, res) => {
  res.send({ party });
};

//get a party by id
let getParty = (req, res) => {
  const id = req.params.partyId;
  let found = party['data'].find(party => {
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
};

//post parties
let postParty = (req, res) => {
  const { name, address, email, city, logo } = req.body;

  //let data = req.body;
  currentId++;

  let newParty = {
    id: currentId,
    name: name,
    email: email,
    address: address,
    city: city,
    logo: logo
  };

  const err = validateParty(req.body);
  console.log('JOI Error is', err['error'].details.map(n => console.log(n)));

  let error = err['error'].details.map(n => n.message);
  for (let i of error) {
    console.log(i);
  }
  console.log(error);
  if (!name || !email) {
    return res.send({
      status: 400,
      error: error
    });
  }

  party['data'].push(newParty);
  res.send({
    status: party.status,
    data: [
      {
        id: newParty.id,
        name: newParty.name,
        email: newParty.email,
        address: newParty.address,
        city: newParty.city,
        logo: newParty.logo
        // dateCreated: day
      }
    ]
  });
};

//edit parties
let editParty = (req, res) => {
  const id = req.params.partyId;
  let newName = req.body.name;

  let found = party['data'].find(party => {
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
};

//delete parties
let deleteParty = (req, res) => {
  const id = req.params.partyId;

  let found = false;

  party['data'].forEach((party, index, array) => {
    if (!found && party.id === parseInt(id)) {
      array.splice(index, 1);
    }
  });

  res.send({
    status: party.status,
    data: [{ maessage: 'party deleted successfully' }]
  });
};

module.exports = { getParties, getParty, postParty, editParty, deleteParty };
