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
    const { rows } = await db.query(textQuery, [req.body.email]);
    if (!rows[0]) {
      return res
        .status(400)
        .send({ message: 'The email you provided could not be found' });
    }
    if (!Helper.comparePassword(rows[0].password, req.body.password)) {
      return res.status(200).send({ message: 'password incorrect' });
    }
    const token = Helper.genToken(rows[0].id);
    console.log(rows);
    return res.status(200).send({ token });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};

export default { login };
