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
  const resetPassword = `UPDATE users SET password=$1, modified_date=$2 WHERE email=$3 returning *`;

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
