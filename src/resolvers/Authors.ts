import { AuthenticationError } from 'apollo-server-fastify';

export function findAuthorById(params: IQueryParams) {
    //
    console.log(arguments['app']);
    throw new AuthenticationError('Could not verify user token. Unprevilidged');
}

export function retrievePosts(args: IQueryParams) {
    //
}
