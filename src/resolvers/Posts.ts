import { ApolloServer } from 'apollo-server-fastify';

export default (root, args, context: ApolloServer, info) => {
    //
    console.log(root, args);
    return [];
};
