const { GraphQLInputObjectType, GraphQLString, GraphQLNonNull, GraphQLID } = require('graphql');

module.exports = new GraphQLInputObjectType({
    name: 'EnderecoInput',
    fields: {
        id: { type: GraphQLNonNull(GraphQLID) },
        rua: { type: GraphQLNonNull(GraphQLString) },
        numero: { type: GraphQLNonNull(GraphQLString) },
        bairro: { type: GraphQLNonNull(GraphQLString) },
        cidade: { type: GraphQLNonNull(GraphQLString) },
        estado: { type: GraphQLNonNull(GraphQLString) },
        pais: { type: GraphQLNonNull(GraphQLString) }
    }
});