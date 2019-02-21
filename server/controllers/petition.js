import dotenv from 'dotenv';
import 'regenerator-runtime/runtime';
import '@babel/polyfill';
import uuidv4 from 'uuid/v4';
import moment from 'moment';
import db from '../models/index';

const petition = async (req, res) => {
  const { createdBy, office, body } = req.body;
  const createQuery = `INSERT INTO petition(id,createdBy,office,body,created_date) VALUES($1,$2,$3,$4,$5) returning *`;

  const values = [uuidv4(), createdBy, office, body, moment(new Date())];

  try {
    const rows = await db.query(createQuery, values);
    console.log(rows[0]);
    return res
      .status(201)
      .send({ rows: rows[0], message: 'your petition was successfully sent' });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};

export default { petition };
