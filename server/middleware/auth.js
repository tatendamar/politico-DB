import jwt from 'jsonwebtoken';
import db from '../models/index';


const verifyToken = async (req, res, next) => {
  const token = req.headers['x-access-token'];
  if(!token){
    return res.status(400).send({'message: Token is not provided'});
  }
  try{
    const decoded = await jwt.verify(token, process.env.SECRET);
    const text ='SELECT * FROM users WHERE id = $1';
    const {rows} = await db.query(text, [decoded.userId]);
    if(!rows[0]){
      return res.status(400).send({'message': 'the token you provided is invalid'})
    }
    req.user {id : decoded.userId};
    next();
  }
  catch(error){
    return res.status(400).send(error);
  }
}

export default verityToken;