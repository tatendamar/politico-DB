'use strict';

var _bodyParser = _interopRequireDefault(require('body-parser'));

var _morgan = _interopRequireDefault(require('morgan'));

var _parties = _interopRequireDefault(require('./routes/parties'));

var _officies = _interopRequireDefault(require('./routes/officies'));

var _signup = _interopRequireDefault(require('./routes/signup'));

var _login = _interopRequireDefault(require('./routes/login'));

require('@babel/polyfill');

var _dotenv = _interopRequireDefault(require('dotenv'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_dotenv.default.config();

var app = require('express')();

app.use((0, _morgan.default)('dev'));
app.use(
  _bodyParser.default.urlencoded({
    extended: false
  })
);
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.text());
app.use(
  _bodyParser.default.json({
    type: 'application/json'
  })
); //configuring cores

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, PATCH, POST, GET, DELETE');
    return res.status(200).json({});
  }

  next();
}); //init routes using the standard specified

app.use('/api/v1', _parties.default);
app.use('/api/v1', _officies.default);
app.use('/api/v1/office', _officies.default);
app.use('/api/v1/auth', _signup.default);
app.use('/api/v1/auth', _login.default);
app.use(function(req, res, next) {
  var error = new Error(
    'Not found please add :: /api/v1/parties or /api/v1/officies in your url bar to view the output from my apis'
  );
  error.status = 404;
  next(error);
});
app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});
var port = process.env.PORT || 4000; //listen for request

module.exports = app.listen(port, function() {
  console.log('listening for request on port 4000');
});
