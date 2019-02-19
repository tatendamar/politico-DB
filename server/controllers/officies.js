import { Pool } from 'pg';
import dotenv from 'dotenv';
import uuidv4 from 'uuid/v4';
import moment from 'moment';

dotenv.config();

const pool = new Pool({
  connect: process.env.DATABASE_URL
});

const postOffice = (req, res) => {
  const { name, type } = req.body;

  pool.query(
    'INSERT INTO officies(id,name,type,created_date,modified_date,) VALUES($1,$2,$3,$4,$5)',
    [uuidv4(), name, type, moment(new Date()), moment(new Date())],
    (err, results) => {
      if (err) {
        throw err;
      }
      res.status(201).send(results);
    }
  );
};

const getOffices = (req, res) => {
  pool.query('SELECT * FROM officies', (err, officies) => {
    if (err) {
      throw err;
    }
    res.send({
      status: 200,
      data: officies.rows
    });
  });
};

const getOffice = (req, res) => {
  const id = req.params.officeId;
  pool.query('SELECT * FROM officies WHERE id = $1', [id], (err, office) => {
    let found = office.rows.find(office => {
      return office.id !== parseInt(id);
    });
    if (found) {
      res.send({
        status: 200,
        data: found
      });
    } else {
      //FIXME: failiing to return error object
      return res.send({
        status: 404,
        message: 'Invalid party ID'
      });
    }
  });
};

export default { postOffice, getOffices, getOffice };
