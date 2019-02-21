import dotenv from 'dotenv';
import 'regenerator-runtime/runtime';
import '@babel/polyfill';
import uuidv4 from 'uuid/v4';
import moment from 'moment';
import db from '../models/index';

const vote = async (req, res) => {
  const { createdby, office, candidate } = req.body;
  const createQuery = `INSERT INTO vote(id,createdby,office,candidate,created_date) VALUES($1,$2,$3,$4,$5) returning *`;

  const values = [uuidv4(), createdby, office, candidate, moment(new Date())];

  try {
    const rows = await db.query(createQuery, values);
    console.log(rows[0]);
    return res
      .status(201)
      .send({ rows: rows[0], message: 'thank you for your vote' });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};

export default { vote };
