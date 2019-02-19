import { Pool } from 'pg';
import dotenv from 'dotenv';
import uuidv4 from 'uuid/v4';
import moment from 'moment';
import Helper from '../../helpers/signupHelper';
import db from '../../models/index';

dotenv.config();

const createUser = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).send({ message: 'missing email and password' });
  }

  if (!Helper.isValidEmail(req.body.email)) {
    return res.status(400).send({ message: 'enter valid email address' });
  }

  const hashPassword = Helper.hashPassword(req.body.password);

  const { firstname, lastname, email, phonenumber, passporturl } = req.body;

  const createQuery = `INSERT INTO users(id, firstname, lastname, email, phonenumber, password, passporturl, created_date, modified_date) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)
    returning *`;

  const values = [
    uuidv4(),
    firstname,
    lastname,
    email,
    phonenumber,
    hashPassword,
    passporturl,
    moment(new Date()),
    moment(new Date())
  ];

  try {
    const { rows } = await db.query(createQuery, values);
    console.log(rows);
    const token = Helper.genToken(rows[0].id);
    console.log(token);
    return res.status(201).send({ token });
  } catch (error) {
    if (error.routine === '_bt_check_unique') {
      return res.status(400).send({ message: 'User ' });
    }
    return res.status(400).send(error);
  }
};

// pool.query(
//   'SELECT * FROM users WHERE id = $1',
//   [uuidv4()],
//   (err, party) => {
//     console.log(party.fields[0].name);
//   }
// );
// console.log(result);
// const rows = result.rows;
// console.log(rows);
// const token = Helper.genToken(rows[0].id);
//return res.status(201).send(result);

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
