//
const express = require('express');
const router = express.Router();

//get parties
router.get('/parties', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET req to parties'
  });
});

//get a party by id
router.get('/parties/:partyId', (req, res, next) => {
  const id = req.params.partyId;
  if (id === 'spec') {
    res.status(200).json({
      message: 'Jandling UT req to parties',
      id: id
    });
  } else {
    res.status(200).json({
      message: 'Passed an id'
    });
  }
});

//post parties
router.post('/parties', (req, res, next) => {
  res.status(200).json({
    message: 'Handling POST req to parties'
  });
});

//edit parties
router.put('/parties/:partyId', (req, res, next) => {
  res.status(200).json({
    message: 'Jandling PUT req to parties'
  });
});

//delete parties
router.delete('/parties/:partyId', (req, res, next) => {
  res.status(200).json({
    message: 'Jandling DELETE req to parties'
  });
});

module.exports = router;
