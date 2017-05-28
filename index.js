const express = require('express');
const app = express();
const graphqlServer = require('./graphql/graphql');

app.use('/graphql', graphqlServer);

const server = app.listen(3000, function() {
  console.log('Process ' + process.pid + ' is listening to all incoming requests');
});