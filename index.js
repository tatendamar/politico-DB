import bodyParser from 'body-parser';
import morgan from 'morgan';

import partyRoutes from './server/routes/parties';
import officeRoutes from './server/routes/officies';

const app = require('express')();
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

//configuring cores
app.use((req, res, next) => {
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
});

//init routes using the standard specified
app.use('/api/v1', partyRoutes);
app.use('/api/v1', officeRoutes);

app.use((req, res, next) => {
  const error = new Error(
    'Not found please add :: /api/v1/parties or /api/v1/officies in your url bar to view the output from my apis'
  );
  error.status = 404;
  next(error);
});

app.use((err, req, res) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

let port = process.env.PORT || 4000;

//listen for request
app.listen(port, () => {
  console.log('listening for request on port 4000');
});
