import { Pool } from 'pg';
import dotenv from 'dotenv';
import uuidv4 from 'uuid/v4';
import moment from 'moment';
import Helper from '../../helpers/signupHelper';
import db from '../../models/index';

dotenv.config();

const pool = new Pool({
  connect: process.env.DATABASE_URL
});

const login = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).send({ message: ' missing fields' });
  }

  if (!Helper.isValidEmail(req.body.email)) {
    return res.status(400).send({ message: 'enter valid email address' });
  }


  const textQuery = 'SELECT * FROM users WHERE email = $1';
  try {
    const {rows} = await db.query(textQuery, [req.body.email]);
    if(!row[0]){
      return res.status(400).send({'message': 'The email you provided could not be found'});
    }
    if(!Helper.comparePassword)
  }
};
 

export default { login };
