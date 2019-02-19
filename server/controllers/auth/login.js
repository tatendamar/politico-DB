// import { Pool } from 'pg';
// import dotenv from 'dotenv';
// import uuidv4 from 'uuid/v4';
// import moment from 'moment';
// import Helper from '../../helpers/signupHelper';
// import db from '../../models/index';

// dotenv.config();

// const pool = new Pool({
//   connect: process.env.DATABASE_URL
// });

// const login = async (req, res) => {
//   if (!req.body.email || !req.body.password) {
//     return res.status(400).send({ message: 'some values' });
//   }

//   if (!Helper.isValidEmail(req.body.email)) {
//     return res.status(400).send({ message: 'enter valid email address' });
//   }

//   const hashPassword = Helper.hashPassword(req.body.password);

//   const { firstname, lastname, email, phonenumber, passporturl } = req.body;

//   const createQuery = `INSERT INTO users(id, firstname, lastname, email, phonenumber, password, passporturl, created_date, modified_date) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)
//     returning *`;

//   const values = [
//     uuidv4(),
//     firstname,
//     lastname,
//     email,
//     phonenumber,
//     hashPassword,
//     passporturl,
//     moment(new Date()),
//     moment(new Date())
//   ];

//   try {
//     const { rows } = await db.query(createQuery, values);
//     console.log(rows);
//     const token = Helper.genToken(rows[0].id);

//     return res.status(201).send({ token });
//   } catch (error) {
//     if (error.routine === '_bt_check_unique') {
//       return res.status(400).send({ message: 'User ' });
//     }
//     return res.status(400).send(error);
//   }
// };

// export default { login };
