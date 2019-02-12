import party from '../models/parties';

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
  // let id = req.body.id;
  let name = req.body.name;
  let email = req.body.email;
  let address = req.body.address;
  let city = req.body.city;
  let logo = req.body.logo;

  currentId++;

  let newPart = {
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
    data: [
      {
        id: newPart.id,
        name: newPart.name,
        email: newPart.email,
        address: newPart.address,
        city: newPart.city,
        logo: newPart.logo
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

export default { getParties, getParty, postParty, editParty, deleteParty };
