import { Pool } from 'pg';
import dotenv from 'dotenv';
import uuidv4 from 'uuid/v4';
import moment from 'moment';
import Helper from '../../helpers/loginHelper';
import db from '../../models/index';

dotenv.config();

const resetPassword = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).send({ message: 'missing email and password' });
  }

  if (!Helper.isValidEmail(req.body.email)) {
    return res.status(400).send({ message: 'enter valid email address' });
  }

  const hashPassword = Helper.hashPassword(req.body.password);

  const findOne = `SELECT * FROM users WHERE email=$1`;
  const resetPassword = `INSERT INTO users SET password=$1, modified_date=$2 WHERE email=$3 returning *`;

  try {
    const rows = await db.query(findOne, [req.body.email]);
    if (!rows[0]) {
      res.status(404).send({ message: 'user not found' });
    }
    const values = [res.body.hashPassword, moment(new Date()), req.body.email];
    const response = await db.query(resetPassword, values);
    return res.status(200).send(response[0]);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export default { resetPassword };

import dotenv from 'dotenv';
import Helper from '../../helpers/loginHelper';
import db from '../../models/index';

dotenv.config();

const login = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).send({ message: ' missing fields' });
  }

  if (!Helper.isValidEmail(req.body.email)) {
    return res.status(400).send({ message: 'enter valid email address' });
  }

  const textQuery = 'SELECT * FROM users WHERE email = $1';
  try {
    const rows = await db.query(textQuery, [req.body.email]);
    //console.log(rows.rows[0]);
    if (!rows.rows[0]) {
      return res
        .status(400)
        .send({ message: 'The email you provided could not be found' });
    }
    if (!Helper.comparePassword(rows.rows[0].password, req.body.password)) {
      return res.status(200).send({ message: 'password incorrect' });
    }
    const token = Helper.genToken(rows.rows[0].id);
    //console.log(token);
    return res.status(201).send({ status: 201, token: token });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
