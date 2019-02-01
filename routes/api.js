//FIXME: DELETE THIS TEST
const express = require('express');
const router = express.Router();
//const mongoose = require('mongoose');

// const Part = require('../models/api');

//get parties

const info = [
  { name: 'New Poetr', email: 'tatevf@hfhf.com' },
  { name: 'Garnite', email: 'tatevf@hfhf.com' }
];

router.get('/part', (req, res) => {
  res.send({ info: info });
});

router.post('/part', (req, res) => {
  let name = req.body.name;
  let email = req.body.email;

  const newPart = { name: name, email: email };

  info.push(newPart);

  res.status(201).json({
    message: 'Party created succesfully!'
  });
});
// //post parties
// router.post('/part', (req, res) => {
//   const part = new Part({
//     _id: new mongoose.Types.ObjectId(),
//     name: req.body.name,
//     email: req.body.email
//   });

//   part
//     .save()
//     .then(result => {
//       console.log(result);
//     })
//     .catch(err => console.log(err));
//   res.status(201).json({
//     maessage: 'Handling POST requst to /part',
//     createdPart: part
//   });
// });

// router.get('/part', (req, res) => {
//   res.send({ info: info });
// });

// router.get('/part/:partId', (req, res) => {
//   const id = req.params.partId;
//   Part.findById(id)
//     .exec()
//     .then(doc => {
//       console.log(doc);
//       res.status(200).json(doc);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ error: err });
//     });
// });
// //edit parties
// router.put('/part/:id', (req, res) => {
//   res.send({ type: 'EDIT' });
// });

// //delete parties
// router.delete('/part/:id', (req, res) => {
//   res.send({ type: 'DELETE' });
// });

module.exports = router;
