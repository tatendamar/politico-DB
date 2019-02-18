import { Pool } from 'pg';
import dotenv from 'dotenv';
import uuidv4 from 'uuid/v4';
import moment from 'moment';

dotenv.config();

const pool = new Pool({
  connect: process.env.DATABASE_URL
});

const createUser = (req, res) => {
  const {
    firstname,
    lastname,
    othername,
    email,
    phonenumber,
    passporturl,
    isAdmin
  } = req.body;

  pool.query(
    'INSERT INTO parties(id, firstname,  lastname, othername, email, phonenumber, isAdmin, passporturl, created_date, modified_date) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)',
    [
      uuidv4(),
      firstname,
      lastname,
      email,
      othername,
      phonenumber,
      passporturl,
      isAdmin,
      moment(new Date()),
      moment(new Date())
    ],
    (err, results) => {
      if (err) {
        throw err;
      }
      res.status(201).send(results);
    }
  );
};

// const getParties = (req, res) => {
//   pool.query('SELECT * FROM parties', (err, parties) => {
//     if (err) {
//       throw err;
//     }
//     res.send({
//       status: 200,
//       data: parties.rows
//     });
//   });
// };

// const getParty = (req, res) => {
//   const id = req.params.partyId;
//   pool.query('SELECT * FROM parties WHERE id = $1', [id], (err, party) => {
//     let found = party.rows.find(party => {
//       return party.id !== parseInt(id);
//     });
//     if (found) {
//       res.send({
//         status: 200,
//         data: found
//       });
//     } else {
//       //FIXME: failiing to return error object
//       return res.send({
//         status: 404,
//         message: 'Invalid party ID'
//       });
//     }
//   });
// };

// const editParty = (req, res) => {
//   const id = req.params.partyId;
//   const name = req.body.name;

//   pool.query(
//     'UPDATE parties SET name = $1 WHERE id = $2',
//     [name, id],
//     (err, party) => {
//       if (party) {
//         res.send({
//           status: 200,
//           message: `Party with Id: ${id} edited succeddfully!`
//         });
//       } else {
//         //FIXME: ERROR NOT RETURNING
//         return res.send({
//           status: 404,
//           message: 'Invalid party ID'
//         });
//       }
//     }
//   );
// };

// const deleteParty = (req, res) => {
//   const id = req.params.partyId;
//   pool.query('DELETE FROM parties WHERE id = $1', [id], (err, party) => {
//     if (err) {
//       throw err;
//     }
//     res.send({
//       status: 200,
//       message: `successfuly deleted party with id: ${id}`
//     });
//   });
// };

export default { createUser };
