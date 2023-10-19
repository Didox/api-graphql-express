const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema } = require('graphql');
const RootQuery = require("./queries/clientes.queries");
const Mutation = require("./mutations/clientes.mudation");

const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});

const app = express();

app.use('/', graphqlHTTP({
    schema: schema,
    graphiql: true  // Ferramenta de teste GraphQL no navegador
}));

app.listen(4001, () => {
    console.log('Servidor rodando na porta 4001');
});