import { gql } from 'apollo-server-fastify';
import { readFileSync } from 'fs';
import { applyMiddleware } from 'graphql-middleware';
import { makeExecutableSchema } from 'graphql-tools';
import { join } from 'path';
import mutationResolvers from '../mutations';
import permissions from '../permissions';
import queryResolvers from '../queries';

const schemas = readFileSync(join(__dirname, '..', '..', 'graphql', 'schema.graphql'), 'utf-8');
const queries = readFileSync(join(__dirname, '..', '..', 'graphql', 'queries.graphql'), 'utf-8');
const mutations = readFileSync(join(__dirname, '..', '..', 'graphql', 'mutations.graphql'), 'utf-8');

const typeDefs = gql`
    ${schemas}
    ${queries}
    ${mutations}
`;

export default applyMiddleware(makeExecutableSchema({ typeDefs, resolvers: { ...queryResolvers, ...mutationResolvers } }), permissions);
