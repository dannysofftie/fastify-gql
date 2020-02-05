import { AuthenticationError } from 'apollo-server-fastify';

export function findAuthorById(params: IQueryParams) {
    //
    console.log(params);
    throw new AuthenticationError('Could not verify user token. Unprevilidged');
}

export function retrievePosts(args: IQueryParams) {
    //
}
