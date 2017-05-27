const express = require('express');

const app = express();
app.all('/*', function (req, res) {
  res.send('process ' + process.pid + ' says hello!').end();
});
const server = app.listen(3000, function() {
  console.log('Process ' + process.pid + ' is listening to all incoming requests');
});