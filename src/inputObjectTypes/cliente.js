const { GraphQLInputObjectType, GraphQLList, GraphQLString, GraphQLNonNull } = require('graphql');
const EnderecoInputType = require("./endereco");

module.exports = new GraphQLInputObjectType({
    name: 'ClienteInput',
    fields: {
        nome: { type: GraphQLNonNull(GraphQLString) },
        telefone: { type: GraphQLNonNull(GraphQLString) },
        enderecos: { type: GraphQLList(EnderecoInputType) }
    }
});