import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const hashPassword = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

const comparePassword = (hashPassword, password) => {
  return bcrypt.compareSync(password, hashPassword);
};

const isValidEmail = email => {
  return /\S+@\S+\.\S+/.test(email);
};

const genToken = id => {
  const token = jwt.sign(
    {
      userId: id
    },
    process.env.TOKEN_SECRET,
    { expiresIn: '1d' }
  );
  return token;
};

export default { hashPassword, comparePassword, isValidEmail, genToken };
