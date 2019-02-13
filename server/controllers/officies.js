const office = require('../models/officies');

let currentId = 2;

//get parties
let getOfficies = (req, res) => {
  res.send({ office });
};

//get a party by id
let getOffice = (req, res) => {
  const id = req.params.officeId;

  let found = office['data'].find(office => {
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
};

//post parties
let postOffice = (req, res) => {
  // let id = req.body.id;
  let name = req.body.name;
  let type = req.body.type;

  currentId++;

  const newOffice = {
    id: currentId,
    name: name,
    type: type
    // dateCreated: day
  };

  office['data'].push(newOffice);

  res.send({
    status: 201,
    data: [
      {
        id: newOffice.id,
        name: newOffice.name,
        type: newOffice.type
        // dateCreated: day
      }
    ]
  });
};

module.exports = { getOfficies, getOffice, postOffice };
