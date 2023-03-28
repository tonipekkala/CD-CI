const app =  require( "./app");
const calculator = require('./calculator');
const http = require('http');
const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log('Example app listening on port 3000!'),
);