//
const router = require('express')();
// const day = require('./utils/date');

let office = {
  status: 200,
  data: [
    {
      id: 1,
      name: 'member of parliament',
      type: 'House of representatives'
      // dateCreated: day
    },
    {
      id: 2,
      name: 'Campaign Manager',
      type: 'Department of information'
      // dateCreated: day
    }
  ]
};

let currentId = 2;

//get parties
router.get('/offices', (req, res, next) => {
  res.send({ office });
});

//get a party by id
router.get('/offices/:officeId', (req, res, next) => {
  const id = req.params.officeId;

  let found = false;

  office['data'].forEach((office, index, array) => {
    if (!found && office.id === parseInt(id)) {
      array.slice(0, index);
    }
  });

  res.send({
    status: office.status,
    data: office.data.map(col =>
      col.id === parseInt(id)
        ? {
            id: col.id,
            name: col.name,
            address: col.address,
            email: col.email,
            city: col.city,
            logo: col.logo
            // dateCreated: col.dateCreated
          }
        : 'Not Found'
    )
  });
});

//post parties
router.post('/offices', (req, res, next) => {
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
});

module.exports = router;
