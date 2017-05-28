const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const root = require('./root');

const server = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
});

module.exports = server;