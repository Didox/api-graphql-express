const { GraphQLID, GraphQLList, GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql');
const ClienteType = require("../objectTypes/cliente");
const EnderecoInputType = require("../inputObjectTypes/endereco");
const clientes = require("../db/clientes");

module.exports = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        adicionarCliente: {
            type: ClienteType,
            args: {
                nome: { type: GraphQLNonNull(GraphQLString) },
                telefone: { type: GraphQLNonNull(GraphQLString) },
                enderecos: { type: GraphQLList(EnderecoInputType) }
            },
            resolve(parent, args) {
                const novoCliente = {
                    id: clientes.length + 1,
                    nome: args.nome,
                    telefone: args.telefone,
                    enderecos: args.enderecos
                };
                clientes.push(novoCliente);
                return novoCliente;
            }
        },
        excluirClientePorId: {
            type: ClienteType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                const indice = clientes.findIndex(c => Number(c.id) == Number(args.id));
                if(indice !== -1){
                    const [clienteDeletado] = clientes.splice(indice, 1);
                    return clienteDeletado
                }

                throw new Error(`O cliente de id ${id} não foi encontrado`);
            }
        }
    }
});