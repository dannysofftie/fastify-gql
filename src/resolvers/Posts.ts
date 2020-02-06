import { ApolloServer } from 'apollo-server-fastify';
import { FastifyContext } from 'fastify';

export default (root, args, context: FastifyContext, info) => {
    //
    console.log(root, args, context);
    return [];
};
