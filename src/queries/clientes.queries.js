const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLNonNull, GraphQLID } = require('graphql');
const ClienteType = require("../objectTypes/cliente");
const clientes = require("../db/clientes");

module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        clientes: {
            type: new GraphQLList(ClienteType),
            resolve(parent, args) {
                return clientes;
            }
        },
        clientesPorId: {
            args: { id: { type: GraphQLID } },
            type: ClienteType,
            resolve(parent, args) {
                const clientesFiltrado = clientes.find(c => Number(c.id) === Number(args.id));
                return clientesFiltrado;
            }
        },
        clientesPorNomeCidade: {
            args: { 
                nome: { type: GraphQLNonNull(GraphQLString) },
                cidade: { type: GraphQLNonNull(GraphQLString) } 
            },
            type: new GraphQLList(ClienteType),
            resolve(parent, args) {
                return clientes.filter(c => {
                    let nomeValido = c.nome.indexOf(args.nome) !== -1;
                    let enderecoValido = c.enderecos.find(e => e.cidade.indexOf(args.cidade) !== -1) !== null;
                    return nomeValido && enderecoValido;
                });
            }
        }
    }
});