import { Pool } from 'pg';
import dotenv from 'dotenv';
import 'regenerator-runtime/runtime';

dotenv.config();

const pool = new Pool({
  connect: process.env.DATABASE_URL
});

export default {
  query(text, params) {
    return new Promise((resolve, reject) => {
      pool
        .query(text, params)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
