import { gql } from 'apollo-server-fastify';
import { readFileSync } from 'fs';
import { join } from 'path';

const schemas = readFileSync(join(__dirname, '..', 'schemas.graphql'), 'utf-8');
const queries = readFileSync(join(__dirname, '..', 'queries.graphql'), 'utf-8');
const mutations = readFileSync(join(__dirname, '..', 'mutations.graphql'), 'utf-8');

const typeDefs = gql`
    ${schemas}
    ${queries}
    ${mutations}
`;

export { typeDefs };
