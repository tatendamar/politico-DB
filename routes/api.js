//
const express = require('express');
const router = express.Router();

//get parties
router.get('/parties', (req, res) => {
  res.send({ type: 'GET' });
});

//post parties
router.post('/parties', (req, res) => {
  res.send({ type: 'POST' });
});

//edit parties
router.put('/parties/:id', (req, res) => {
  res.send({ type: 'EDIT' });
});

//delete parties
router.delete('/parties/:id', (req, res) => {
  res.send({ type: 'DELETE' });
});

module.exports = router;
