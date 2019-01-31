// const express = require('express');
// const routes = require('./api/routes/parties');

// const port = process.env.PORT || 4000;

// const app = express();

// //init routes using the standard specified
// app.use('/api/v1', routes);

// //listen for request
// app.listen(port, () => {
//   console.log('listening for request on port 4000');
// });

module.exports = {
  add: function(a, b) {
    return a + b;
  }
};
