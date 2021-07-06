const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const {buildSchema} = require('graphql');

//Construct a schema, using GraphQL schema language
const schema = buildSchema(`
    type Query{
        hello: String
    }
`);

//The root provides a resolver function for each API 
const root = {
    hello: () => {
        return 'Hello World';
    }
};

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(3000)