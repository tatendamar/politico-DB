DROP DATABASE IF EXISTS dhadh;
CREATE DATABASE dhadh;
\c dhadh

CREATE TABLE
IF NOT EXISTS parties
(
      id UUID PRIMARY KEY NOT NULL,
      name VARCHAR
(150) NOT NULL,
      email VARCHAR
(150) NOT NULL,
      address VARCHAR
(500) NOT NULL,


    );
CREATE TABLE
IF NOT EXISTS officies
(
      id UUID PRIMARY KEY NOT NULL,
      name VARCHAR
(128) NOT NULL
    );

CREATE TABLE
IF NOT EXISTS users
(
      id_user UUID PRIMARY KEY NOT NULL,
      firstname VARCHAR
(50) NOT NULL,
      lastname VARCHAR
(50) NOT NULL,
      othername VARCHAR
(50) NOT NULL,
      email VARCHAR
(50) NOT NULL UNIQUE,
      password VARCHAR
(100) NOT NULL,
      phone_number VARCHAR
(50) NOT NULL,
      passport_url VARCHAR
(50) NOT NULL,
    );
CREATE TABLE
IF NOT EXISTS candidates
(
      id UUID  NOT NULL UNIQUE, 
      office_id UUID REFERENCES  offices
(id_office) ON
DELETE CASCADE,
      party_id UUID
REFERENCES parties
(id_party) ON
DELETE RESTRICT,
      user_id UUID
REFERENCES users
(id_user) ON
DELETE CASCADE,
      PRIMARY KEY (user_id ,office_id)
);

CREATE TABLE
IF NOT EXISTS votes
(
   id UUID NOT NULL,
   createdOn  Date ,
   createdBy  INTEGER REFERENCES users
(id_user) ON
DELETE CASCADE,
   office  UUID
REFERENCES offices
(id_office) ON
DELETE NO ACTION,
   candidate INTEGER
REFERENCES candidates
(id_candidate) ON
DELETE NO ACTION,
   PRIMARY KEY
(office ,createdBy)
    );
CREATE TABLE
IF NOT EXISTS petition
(
    id_petition SERIAL PRIMARY KEY NOT NULL,
    createdOn  Date ,
    createdBy  INTEGER REFERENCES users
(id_user) ON
DELETE NO ACTION,
    office INTEGER
REFERENCES offices
(id_office) ON
DELETE NO ACTION,
    body VARCHAR
(100) NOT NULL

   	);