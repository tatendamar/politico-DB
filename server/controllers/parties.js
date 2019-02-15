import validateParty from '../helpers/validateParty';
//import check from 'express-validator/check';
import party from '../models/parties';

let currentId = 2;

//get parties
const getParties = (req, res) => {
  res.send({ party });
};

//get a party by id
const getParty = (req, res) => {
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
const postParty = (req, res) => {
  const { name, address, email, city, logo } = req.body;

  //let data = req.body;
  currentId++;

  const newParty = {
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
const editParty = (req, res) => {
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
const deleteParty = (req, res) => {
  const id = req.params.partyId;

  let found = false;

  party['data'].forEach((party, index, array) => {
    if (!found && party.id === parseInt(id)) {
      array.splice(index, 1);
    } else {
      res.send({
        status: 404,
        message: 'the party you wanted to delete was not found'
      });
    }
  });

  res.send({
    status: party.status,
    data: [{ maessage: 'party deleted successfully' }]
  });
};

export default { getParties, getParty, postParty, editParty, deleteParty };
