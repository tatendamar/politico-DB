import users from '../controllers/auth/login';
const app = require('express')();

app.route('/login').post(users.login);

export default app;
