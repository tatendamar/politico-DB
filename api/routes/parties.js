//
const express = require('express');
const router = express.Router();
const random = require('./utils/random');

let party = {
  status: 200,
  data: [
    {
      id: 1,
      name: 'New Poetr',
      address: 'no 6 nelson mandela way',
      email: 'tatevf@hfhf.com',
      city: 'Cape Town',
      logo:
        'https://pixabay.com/get/ea35b2072cf71c22d2524518b7444795ea76e5d004b014459cf1c17aaeebb2_340.png',
      dateCreated: random
    },
    {
      id: 2,
      name: 'Garnite',
      email: 'tatevf@hfhf.com',
      address: 'no 89 cross road',
      city: 'Cape Town',
      logo: 'https://farm7.staticflickr.com/6057/6262125702_a086dd49f1.jpg',
      dateCreated: random
    }
  ]
};

let currentId = 2;

//get parties
router.get('/parties', (req, res, next) => {
  if (res.status(200)) {
    res.send({ party: party });
  }

  res.status(200).json({
    message: 'Handling GET req to parties'
  });
});

//get a party by id
router.get('/parties/:partyId', (req, res, next) => {
  const id = req.params.partyId;

  let found = false;

  party['data'].forEach((party, index, array) => {
    if (!found && party.id === parseInt(id)) {
      array.slice(0, index);
    }
  });

  res.send({
    status: party.status,
    data: party.data.map(col =>
      col.id === parseInt(id)
        ? {
            id: col.id,
            name: col.name,
            address: col.address,
            email: col.email,
            city: col.city,
            logo: col.logo,
            dateCreated: col.dateCreated
          }
        : 'Not Found'
    )
  });
});

//post parties
router.post('/parties', (req, res, next) => {
  // let id = req.body.id;
  let name = req.body.name;
  let email = req.body.email;
  let address = req.body.address;
  let city = req.body.city;
  let logo = req.body.logo;

  currentId++;

  const newPart = {
    id: currentId,
    name: name,
    email: email,
    address: address,
    city: city,
    logo: logo
  };

  party['data'].push(newPart);

  res.send({
    status: 201,
    data: [
      {
        id: newPart.id,
        name: newPart.name,
        email: newPart.email,
        address: newPart.address,
        city: newPart.city,
        logo: newPart.logo,
        dateCreated: random
      }
    ]
  });
});

//edit parties
router.put('/parties/:partyId', (req, res, next) => {
  const id = req.params.partyId;
  let newName = req.body.name;

  let found = false;

  party['data'].forEach((party, index) => {
    if (!found && party.id === parseInt(id)) {
      party.name = newName;
    }
  });

  res.send({
    status: party.status,
    data: party.data.map(col =>
      col.id === parseInt(id) ? { id: col.id, name: col.name } : 'Not Found'
    )
  });
});

//delete parties
router.delete('/parties/:partyId', (req, res, next) => {
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
});

module.exports = router;
