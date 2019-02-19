// Update with your config settings.
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  connect: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('connected!!');
});

const createOfficesTable = () => {
  const queryOfficies = `CREATE TABLE IF NOT EXISTS

   officies(
     id UUID PRIMARY KEY,
     name VARCHAR(128) NOT NULL,
     type VARCHAR(128) NOT NULL,
)`;

  pool
    .query(queryOfficies)
    .then(res => {
      console.log(res);
      pool.end();
    })
    .catch(err => {
      console.log(err);
      pool.end();
    });
};

const createUserTable = () => {
  const queryUsers = `CREATE TABLE IF NOT EXISTS

   users(
     id UUID PRIMARY KEY,
     firstname VARCHAR(128) NOT NULL,
     lastname VARCHAR(128) NOT NULL,
     email VARCHAR(128) UNIQUE NOT NULL,
     phonenumber VARCHAR(128) NULL,
     passportUrl VARCHAR(128) NULL,
     password VARCHAR(128) NOT NULL,
)`;

  pool
    .query(queryUsers)
    .then(res => {
      console.log(res);
      pool.end();
    })
    .catch(err => {
      console.log(err);
      pool.end();
    });
};

//DROP OFFICES TABLE
const dropOfficesTable = () => {
  const queryOfficies = 'DROP TABLE IF EXISTS parties';
  pool
    .query(queryOfficies)
    .then(res => {
      console.log(res);
      pool.end();
    })
    .catch(err => {
      console.log(err);
      pool.end();
    });
};

// drop users table
const dropUsersTable = () => {
  const queryUsers = 'DROP TABLE IF EXISTS parties';
  pool
    .query(queryUsers)
    .then(res => {
      console.log(res);
      pool.end();
    })
    .catch(err => {
      console.log(err);
      pool.end();
    });
};

//create tables
const createTables = () => {
  createOfficesTable(), createUserTable();
};

const dropTables = () => {
  dropOfficesTable(), dropUsersTable();
};

pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});

module.exports = {
  createOfficesTable,
  createUserTable,
  createTables,
  dropOfficesTable,
  dropUsersTable,
  dropTables
};

require('make-runnable');

// staging: {
//   client: 'postgresql',
//   connection: {
//     database: 'my_db',
//     user:     'username',
//     password: 'password'
//   },
//   pool: {
//     min: 2,
//     max: 10
//   },
//   migrations: {
//     tableName: 'knex_migrations'
//   }
// },

// production: {
//   client: 'postgresql',
//   connection: {
//     database: 'my_db',
//     user:     'username',
//     password: 'password'
//   },
//   pool: {
//     min: 2,
//     max: 10
//   },
//   migrations: {
//     tableName: 'knex_migrations'
//   }
// }
