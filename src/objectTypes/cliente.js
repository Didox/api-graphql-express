const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLNonNull, GraphQLID } = require('graphql');
const EnderecoType = require("./endereco");

module.exports = new GraphQLObjectType({
    name: 'Cliente',
    fields: {
        id: { type: GraphQLNonNull(GraphQLID) },
        nome: { type: GraphQLNonNull(GraphQLString) },
        telefone: { type: GraphQLString },
        enderecos: { type: GraphQLList(EnderecoType) }
    }
});