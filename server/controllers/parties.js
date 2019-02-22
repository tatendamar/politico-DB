import { Pool } from 'pg';
import dotenv from 'dotenv';
import 'regenerator-runtime/runtime';
import '@babel/polyfill';
import uuidv4 from 'uuid/v4';
import moment from 'moment';
import db from '../models/index';

dotenv.config();

const pool = new Pool({
  connect: process.env.DATABASE_URL
});

const postParty = (req, res) => {
  const { name, address, email, city, logo } = req.body;

  pool.query(
    'INSERT INTO parties(id,name,address,email,city,logo,created_date,modified_date) VALUES($1,$2,$3,$4,$5,$6,$7,$8)',
    [
      uuidv4(),
      name,
      address,
      email,
      city,
      logo,
      moment(new Date()),
      moment(new Date())
    ],
    (err, results) => {
      if (err) {
        throw err;
      }
      res
        .status(201)
        .send({ status: 201, message: 'party was created successfully' });
    }
  );
};

const getParties = (req, res) => {
  pool.query('SELECT * FROM parties', (err, parties) => {
    if (err) {
      throw err;
    }
    res.send({
      status: 200,
      data: parties.rows
    });
  });
};

const getParty = async (req, res) => {
  const id = req.params.partyId;
  const singleQuery = `SELECT * FROM parties WHERE id = $1`;

  try {
    const rows = await db.query(singleQuery, [id]);
    // const newVar = rows.rows[0].id;
    //console.log(newVar);
    if (!rows.rows[0]) {
      return res.status(404).send({ message: 'not found' });
    }
    return res.status(200).send({ status: 200, data: rows.rows[0] });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};

const editParty = (req, res) => {
  const id = req.params.partyId;
  const name = req.body.name;

  pool.query(
    'UPDATE parties SET name = $1 WHERE id = $2',
    [name, id],
    (err, party) => {
      if (party) {
        res.send({
          status: 200,
          message: `Party with Id: ${id} edited successfully!`
        });
      } else {
        //FIXME: ERROR NOT RETURNING
        return res.send({
          status: 404,
          message: 'Invalid party ID'
        });
      }
    }
  );
};

const deleteParty = (req, res) => {
  const id = req.params.partyId;
  pool.query('DELETE FROM parties WHERE id = $1', [id], (err, party) => {
    if (err) {
      throw err;
    }
    res.send({
      status: 200,
      message: `successfuly deleted party with id: ${id}`
    });
  });
};

export default { postParty, getParties, getParty, editParty, deleteParty };
