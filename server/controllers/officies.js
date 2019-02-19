import dotenv from 'dotenv';
import uuidv4 from 'uuid/v4';
import moment from 'moment';
import db from '../models/index';

dotenv.config();

const postOffice = async (req, res) => {
  const { name, user_id } = req.body;

  const createQuery = `INSERT INTO officies(id,name, created_date,modified_date,user_id) VALUES($1,$2,$3,$4,$5)`;

  const values = [
    uuidv4(),
    name,
    moment(new Date()),
    moment(new Date()),
    user_id
  ];

  try {
    const { rows } = await db.query(createQuery, values);
    return res.status(201).send(rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};

const getOffices = async (req, res) => {
  const allQuery = 'SELECT * FROM officies';

  try {
    const { rows } = await db.query(allQuery);

    return res.status(200).send(rows);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getOffice = async (req, res) => {
  const id = req.params.id;
  const singleQuery = 'SELECT * FROM officies WHERE id = $1';

  try {
    const rows = await db.query(singleQuery, id);
    console.log(rows[0]);
    if (!rows[0]) {
      return res.status(404).SEND({ message: 'not found' });
    }
    return res.status(200).send(rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};

export default { postOffice, getOffices, getOffice };
