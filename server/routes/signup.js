import users from '../controllers/auth/signup';
const app = require('express')();

app.route('/signup').post(users.createUser);

export default app;
